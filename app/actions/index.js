"use server";

import { getSessionUser } from "@/utils/getSessionUser";
import Property from "@/models/Property";
import connectDB from "@/config/database";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import cloudinary from "@/config/cloudinary";


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
 
  };


  const imageUrls = [];

  for(let imageFile of images){
    const imageBuffer = await imageFile.arrayBuffer()

    const imageArray = Array.from(new Uint8Array(imageBuffer))
    const imageData = Buffer.from(imageArray)

    // convert to base 64: 
    const imageBase64 =  imageData.toString('base64')

    // request to cloudinary 
    const response = await cloudinary.uploader.upload(`data:image/png;base64,${imageBase64}`,{
      folder:'Dwelo'
    })

    imageUrls.push(response.secure_url);
    
  }

  propertyData.images = imageUrls;


 const newEntry = new Property(propertyData)
 await newEntry.save()

 revalidatePath('/','layout')

 redirect(`/properties/${newEntry._id}`)
}




export async function getProperty(id) {
      await connectDB();
      const property = await Property.findById(id);
    if(!property){
      throw new Error('Property not found')
    }
      return property
  
}