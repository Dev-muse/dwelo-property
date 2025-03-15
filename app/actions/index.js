"use server";

import { getSessionUser } from "@/utils/getSessionUser";
import Property from "@/models/Property";
import connectDB from "@/config/database";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addProperty(formData) {
  await connectDB();
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");
  }

  const { userId } = sessionUser;

  const helper = (name) => {
    return formData.get(name);
  };

  //all selection of amenities in an array
  const amenities = formData.getAll("amenities");

  // multiple images , get array of objects, convert to array of file image names
  const images = formData
    .getAll("images")
    .filter((image) => image.name !== "")
    .map((image) => image.name);

  const propertyData = {
    owner: userId,
    type: helper("type"),
    name: helper("name"),
    description: helper("description"),
    location: {
      street: helper("location.street"),
      city: helper("location.city"),
      state: helper("location.state"),
      zipcode: helper("location.zipcode"),
    },
    beds: helper("beds"),
    baths: helper("baths"),
    square_feet: helper("square_feet"),
    amenities,
    rates: {
      weekly: helper("rates.weekly"),
      monthly: helper("rates.monthly"),
      nightly: helper("rates.nightly"),
    },
    seller_info: {
      name: helper("seller_info.name"),
      email: helper("seller_info.email"),
      phone: helper("seller_info.phone"),
    },
    images,
  };


 const newEntry = new Property(propertyData)
 await newEntry.save()

 revalidatePath('/','layout')

 redirect(`/properties/${newEntry._id}`)
}
