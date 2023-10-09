"use client";

import { Companion, Category } from "@prisma/client";

interface CompanionFormProps {
  initalData: Companion | null;
  categories: Category[];
}

type Props = {};

export const CompanionForm = ({
  categories,
  initalData,
}: CompanionFormProps) => {
  return <div>Companion Form</div>;
};
