import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";

// handle get request to  /api/properties/[id]
export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const property = await Property.findById(params.id);
    if (!property) return new Response("Property not found!", { status: 404 });

    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    console.log("error", error);
    return new Response("Something went wrong", { status: 500 });
  }
};
// handle DELETE request to  /api/properties/[id]
export const DELETE = async (request, { params }) => {
  try {
    const propertyId = params.id;
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
      return new Response("user ID is required ", { status: 401 });
    }

    const { userId } = sessionUser;
    await connectDB();

    const property = await Property.findById(propertyId);
    if (!property) return new Response("Property not found!", { status: 404 });

    //verify user id ownership of listing
    if (property.owner.toString() !== userId) {
      return new Response(
        "unauthorized, listing does not belong to this user",
        { status: 401 }
      );
    }
    await property.deleteOne();

    return new Response("Property Deleted", { status: 200 });
  } catch (error) {
    console.log("error", error);
    return new Response("Something went wrong", { status: 500 });
  }
};

// handle PUT request to  /api/properties/[id]
export const PUT = async (request, { params }) => {
  try {
    await connectDB();

    const sessionUser = await getSessionUser();
    if (!sessionUser || !sessionUser.userId) {
      return new Response("User ID is required ", { status: 401 });
    }

    const { id } = params;

    const { userId } = sessionUser;

    const formData = await request.formData();
    // to get specific input data
    const amenities = formData.getAll("amenities");

    // update property data
    const existingProperty = await Property.findById(id);
    // check property existence and if user owns property
    if (!existingProperty) {
      return new Response("Property does not exist", { status: 404 });
    }

    if (existingProperty.owner.toString() !== userId) {
      return new Response(
        "Unauthorized user, property belongs to another user",
        { status: 401 }
      );
    }

    // create propertyData object for DB:

    const propertyData = {
      type: formData.get("type"),
      name: formData.get("name"),
      description: formData.get("description"),
      location: {
        street: formData.get("location.street"),
        city: formData.get("location.city"),
        state: formData.get("location.state"),
        zipcode: formData.get("location.zipcode"),
      },
      beds: formData.get("beds"),
      baths: formData.get("baths"),
      square_feet: formData.get("square_feet"),
      square_feet: formData.get("square_feet"),
      amenities,
      rates: {
        weekly: formData.get("rates.weekly"),
        monthly: formData.get("rates.monthly"),
        nightly: formData.get("rates.nightly"),
      },
      seller_info: {
        email: formData.get("seller_info.email"),
        name: formData.get("seller_info.name"),
        phone: formData.get("seller_info.phone"),
      },
      owner: userId,
    };
    console.log("propertyData", propertyData);

    // update property in Database
    const updatedProperty = await Property.findByIdAndUpdate(id, propertyData);

    return new Response(updatedProperty, { status: 200 });
  } catch (error) {
    return new Response("Failed to add property", { status: 500 });
  }
};
