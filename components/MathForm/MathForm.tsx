"use client";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import * as React from "react";
import { useState } from "react";
import {
  mathIcons,
  mathOptions,
  OperationType,
  SQUARE_ROOT,
} from "@/config/operation";
import { Select, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/button";
import { OperationRequest } from "@/types";

function MathForm({ handler }: { handler: any }) {
  const [operation, setOperation] = useState<OperationType>();
  const [x, setX] = useState<number>();
  const [y, setY] = useState<number>();
  const [loading, setLoading] = useState(false);

  const isNotSquareRoot = operation && SQUARE_ROOT != operation;

  const operationHandler = async (e: any) => {
    e.preventDefault();
    const request: OperationRequest = {
      operationType: operation,
      mathInput: { x, y },
    };
    setLoading(true);
    await handler(request);
    setLoading(false);
  };

  return (
    <Card className="p-3" as="form" onSubmit={operationHandler}>
      <h1 className="text-2xl mb-5 text-center">Calculator</h1>
      <Input
        className="mb-3"
        type="number"
        label="Value X "
        labelPlacement="outside"
        onValueChange={(value: string) => setX(+value)}
        required={true}
      />
      <Select
        startContent={mathIcons.get(operation || "")?.icon}
        label="Select an operation"
        className={`max-w-xs ${isNotSquareRoot ? "mb-3" : "mb-5"}`}
        labelPlacement="outside"
        onChange={(e) => setOperation(e.target.value as OperationType)}
      >
        {mathOptions.map((mathOption) => (
          <SelectItem
            startContent={mathIcons.get(mathOption.key)?.icon}
            key={mathOption.key}
          >
            {mathOption.label}
          </SelectItem>
        ))}
      </Select>
      {isNotSquareRoot && (
        <Input
          className="mb-5"
          type="number"
          label="Value Y "
          labelPlacement="outside"
          onValueChange={(value: string) => setY(+value)}
          required
        />
      )}
      <Button color="primary" type="submit" isDisabled={loading}>
        Calculate
      </Button>
    </Card>
  );
}

export default MathForm;
