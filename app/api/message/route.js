import connectDB from "@/config/database";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";

export const dynamic = "force-dynamic";

// GET to /api/messages

export const GET = async (request) => {
  try {
    await connectDB();
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.user) {
      return new Response("User ID is required", {
        status: 401,
      });
    }

    const { userId } = sessionUser;

    // get messages for user signed in

    const messages = await Message.find({ recipient: userId })
      .populate("sender", "username")
      .populate("property", "name");

    console.log("message ", messages);
    return new Response(JSON.stringify(messages), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("An error has occurred", { status: 500 });
  }
};

//POST to /api/messages

export const POST = async (request) => {
  try {
    await connectDB();
    const { email, name, phone, message, recipient, property } =
      await request.json();
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.user) {
      return new Response(
        JSON.stringify({ message: "Need to log in to send a message" }),
        {
          status: 401,
        }
      );
    }
    const { user } = sessionUser;
    // check to ensure listing owner can't message to self

    if (user.id === recipient) {
      return new Response(
        JSON.stringify({ message: "Listing owner cannot message themself" }),
        { status: 400 }
      );
    }

    const newMessage = new Message({
      sender: user.id,
      name,
      recipient,
      property,
      email,
      phone,
      body: message,
    });
    // store in DB

    await newMessage.save();
    return new Response(JSON.stringify({ message: "Message sent!" }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);

    return new Response("An error has occurred", { status: 500 });
  }
};
