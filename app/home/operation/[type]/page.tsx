"use client";
import MathForm from "@/components/MathForm";
import { UserCredit, UserCreditContext } from "@/components/UserCreditProvider";
import { ErrorResponse, OperationRequest, OperationResponse } from "@/types";
import { NOT_ACCEPTABLE_CODE, UNAUTHORIZED_CODE } from "@/types/statusCode";
import { Card } from "@nextui-org/card";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { Divider } from "@nextui-org/divider";

const MATH: string = "math";
const STRING_GENERATOR: string = "string-generator";

type OperationType = "math" | "string-generator";

export default function Operation({
  params,
}: {
  params: { type: OperationType };
}) {
  const { getCredit, newCredit, setInsuficientStatus }: any =
    useContext(UserCreditContext);
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const userCredit: UserCredit = getCredit();

  const operationHandler = async (request: OperationRequest) => {
    const response = await fetch("/api/operation", {
      method: "POST",
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const statusCode = response.status;
      if (statusCode == UNAUTHORIZED_CODE) {
        router.push("/");
      }
      if (statusCode == NOT_ACCEPTABLE_CODE) {
        console.info;
        setInsuficientStatus();
      }
      const errorResponse: ErrorResponse = await response.json();
      console.info("error", error);
      setError(errorResponse.message);
    } else {
      const creditResponse: OperationResponse = await response.json();
      newCredit(creditResponse.userBalance);
      setResult(creditResponse.operationResponse);
      setAmount(creditResponse.amount);
    }
  };
  console.info("userCredit", userCredit);
  const textColorClass =
    userCredit?.insuficient == true ? "text-red-600" : "text-blue-600";
  console.info(textColorClass);
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Card
        className="py-4 px-4 border-none bg-background/60 dark:bg-default-100/50 inline mb-6"
        isBlurred
        shadow="sm"
      >
        <b className="text-gray-600"> Credit : </b>
        <span className={clsx(textColorClass)}>
          $ {isClient ? userCredit?.credit : "-"}
        </span>
      </Card>
      {MATH === params.type && <MathForm handler={operationHandler} />}

      {result && (
        <Card
          className="py-2 px-6 border-none bg-background/60 dark:bg-default-100/50 inline mb-6"
          isBlurred
          shadow="sm"
        >
          <div className="w-fit mx-auto">
            <b className="text-gray-500"> Result : </b>
            <span className="text-blue-500">{result}</span>
          </div>
          <Divider className="my-2" />
          <div>
            <b className="text-gray-500"> Operation Amount : </b>
            <span className="text-blue-500">$ {amount}</span>
          </div>
        </Card>
      )}

      {error && (
        <p className="text-center mb-4 mt-[-1rem] text-red-600 text-lg">
          {error}
        </p>
      )}
    </section>
  );
}
