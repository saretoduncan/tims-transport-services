import businessCall from "../assets/business_call.webp";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

function ContactsPage() {
  return (
    <div className="my-[12vh] px-6 max-w-[1280px] mx-auto ">
      <div className=" flex flex-col-reverse lg:grid lg:grid-cols-2 lg:relative ">
        <div
          className="h-[300px] lg:h-auto bg-cover relative lg:top-4 lg:left-4 lg:z-[-1] lg:rounded-md"
          style={{
            backgroundImage: "url(" + "'" + businessCall + "'" + ")",
          }}
        >
          <div className="absolute size-full bg-[#00000090] lg:rounded-md"></div>
        </div>
        <div className="bg-orange-600 min-h-[300px] text-white p-4 space-y-4 lg:rounded-lg">
          <h3 className="uppercase font-bold">Contact us</h3>
          <h4 className="text-xl font-bold">Get In Touch</h4>
          <p className="font-bold">
            For inquiries, quotes, or more information, feel free to reach out.
            Our team is here to assist you with all your transport and logistics
            needs.
          </p>
          <section className="grid gap-4 font-bold">
            <section>
              <div className="flex">
                <FaLocationDot className="text-2xl" />
                <p className="text-xl">Location</p>
              </div>

              <small>Alexander heights, perth.</small>
            </section>
            <section>
              <IoMdMail className="text-2xl" />
              <p className="text-xl">Mail</p>
              <small>info@timstransportservices.com</small>
            </section>
            <section>
              <FaPhoneAlt className="text-2xl" />
              <p className="text-xl">Phone</p>
              <small> +64 416 595 734 </small>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;
