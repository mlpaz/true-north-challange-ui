"use client";
import { RANDOM_STRING } from "@/config/operation";
import { OperationRequest } from "@/types";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import * as React from "react";
import { useState } from "react";
import { Switch } from "@nextui-org/switch";

function StringGeneratorForm({ handler }: { handler: any }) {
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState<number>();
  const [length, setLength] = useState<number>();
  const [unique, setUnique] = useState<boolean>(false);
  const [upperLetter, setUpperLetter] = useState<boolean>(false);
  const [lowerLetter, setLowerLetter] = useState<boolean>(false);
  const [digits, setDigits] = useState<boolean>(false);

  const operationHandler = async (e: any) => {
    e.preventDefault();
    const request: OperationRequest = {
      operationType: RANDOM_STRING,
      generateStringInput: {
        number,
        length,
        unique,
        upperLetter,
        lowerLetter,
        digits,
      },
    };
    setLoading(true);
    await handler(request);
    setLoading(false);
  };

  return (
    <Card className="p-3" as="form" onSubmit={operationHandler}>
      <h1 className="text-2xl mb-5 text-center">String Generator</h1>
      <div className="grid-cols-2 grid gap-x-6 gap-y-4 mb-6">
        <Input
          type="number"
          label="Number of rows"
          labelPlacement="outside"
          onValueChange={(value: string) => setNumber(+value)}
          required={true}
        />
        <Input
          type="number"
          label="Length of line"
          labelPlacement="outside"
          onValueChange={(value: string) => setLength(+value)}
          required={true}
        />
        <Switch isSelected={digits} onValueChange={setDigits}>
          Numeric digits (0-9)
        </Switch>
        <Switch isSelected={upperLetter} onValueChange={setUpperLetter}>
          Uppercase letters (A-Z)
        </Switch>
        <Switch isSelected={lowerLetter} onValueChange={setLowerLetter}>
          Lowercase letters (a-z)
        </Switch>
        <Switch isSelected={unique} onValueChange={setUnique}>
          Each row unique
        </Switch>
      </div>

      <Button color="primary" type="submit" isDisabled={loading}>
        Calculate
      </Button>
    </Card>
  );
}

export default StringGeneratorForm;
