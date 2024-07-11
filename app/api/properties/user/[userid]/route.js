import connectDB from "@/config/database";
import Property from "@/models/Property";

// handle get request to  /api/properties/user/:userid
export const GET = async (request, { params }) => {
  try {
    await connectDB();
    const userId = params.userid;
    if (!userId) {
      return new Response("user id is required", { status: 401 });
    }
    const properties = await Property.find({ owner: userId });
    return new Response(JSON.stringify(properties), { status: 200 });
  } catch (error) {
    console.log("error", error);
    return new Response("Something went wrong", { status: 500 });
  }
};
