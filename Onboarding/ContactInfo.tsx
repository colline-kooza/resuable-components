"use client";
import { BioDataFormProps, ContactFormProps } from "@/types/types";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { DatePickerInput } from "../FormInputs/DatePickerInput";

import RadioInput from "../FormInputs/RadioInput";
import PhoneCustomInput from "../FormInputs/PhoneCustomInput";

export type StepFormProps = {
  page: string;
  title: string;
  description: string;
};
export default function ContactInfo({
  page,
  title,
  description,
}: StepFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  // console.log(date);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormProps>();
  const router = useRouter();
  async function onSubmit(data: ContactFormProps) {
    data.page = page;
    console.log(data);
    // setIsLoading(true);
  }
  return (
    <div className="w-full">
      <div className="text-center border-b border-gray-200 pb-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
          {title}
        </h1>
        <p className="text-balance text-muted-foreground">{description}</p>
      </div>
      <form className=" py-4 px-4  mx-auto " onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 grid-cols-2">
          <TextInput
            label="Email Address"
            register={register}
            name="email"
            errors={errors}
            placeholder="eg johndoe@gmail.com "
          />
          <TextInput
            label="Phone"
            register={register}
            name="phone"
            errors={errors}
            placeholder="eg 0762063160 "
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="Country"
            register={register}
            name="country"
            errors={errors}
            placeholder="Enter your Country"
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="City"
            register={register}
            name="city"
            errors={errors}
            placeholder="Enter your City"
            className="col-span-full sm:col-span-1"
          />
          <TextInput
            label="State"
            register={register}
            name="state"
            errors={errors}
            placeholder="Enter your State"
            className="col-span-full sm:col-span-1"
          />
        </div>
        <div className="mt-8 flex justify-center items-center">
          <SubmitButton
            title="Save and Continue"
            isLoading={isLoading}
            loadingTitle="Saving please wait..."
          />
        </div>
      </form>
    </div>
  );
}
