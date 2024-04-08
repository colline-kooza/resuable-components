"use client";
import { BioDataFormProps, ProfessionFormProps } from "@/types/types";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { DatePickerInput } from "../FormInputs/DatePickerInput";

import RadioInput from "../FormInputs/RadioInput";
import SelectInput from "../FormInputs/SelectInput";
import ArrayItemsInput from "../FormInputs/ArrayInput";
import MultipleImageInput from "../FormInputs/MultipleImageInput";
import MultipleFileUpload from "../FormInputs/MultipleFileUpload";

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
  const [dob, setDOB] = useState<Date>();
  const [expiry, setExpiry] = useState<Date>();
  const [profileImage, setProfileImage] = useState(
    "https://utfs.io/f/acf62ede-cc6c-4797-b0ee-3fae55d8d844-3vabb.png"
  );
  const specialties = [
    {
      label: "Medicine",
      value: "medicine",
    },
    {
      label: "Mental Health",
      value: "mental health",
    },
  ];
  const [otherSpecialties, setOtherSpecialties] = useState([]);
  const [docs, setDocs] = useState([]);

  console.log(docs);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfessionFormProps>();
  const router = useRouter();
  async function onSubmit(data: ProfessionFormProps) {
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
            label="Medical School"
            register={register}
            name="medicalSchool"
            errors={errors}
            placeholder="Enter your Grad School Name"
          />
          <TextInput
            label="Graduation Year"
            register={register}
            type="number"
            name="graduationYear"
            errors={errors}
            placeholder="Enter your Grad Year"
            className="col-span-full sm:col-span-1"
          />
          <SelectInput
            options={specialties}
            label="Select Your Primary Specializations"
            name="primarySpecialization"
            className="col-span-full sm:col-span-1"
            register={register}
          />
          <ArrayItemsInput
            setItems={setOtherSpecialties}
            items={otherSpecialties}
            itemTitle="Add Other Specialties"
          />
          <MultipleFileUpload
            label="Upload your Academic Documents (Max of 4 docs)"
            files={docs}
            setFiles={setDocs}
            endpoint="doctorProfessionDocs"
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
