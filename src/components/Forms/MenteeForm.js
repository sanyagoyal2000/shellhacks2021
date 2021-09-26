import {useState} from "react";
//import firebase from 'firebase/compat/app';
import {db} from "../../firebase"
function MenteeForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [discord, setDiscord] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("mentees")
      .add({
        userName: userName,
        password:password,
        firstName:firstName,
        lastName:lastName,
        discord:discord,
        address:address,
        city:city,
        country:country,
        postalCode:postalCode,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setUserName("");
    setEmail("");
    setFirstName("");
    setLastName("");
    setDiscord("");
    setPassword("");
    setAddress("");
    setCity("");
    setCountry("");
    setPostalCode("");
    setMessage("");
  };
    
    return (
      <div className="mt-10 pt-2 pb-4 items-center">
      <section className=" py-1 bg-blueGray-50">
<div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
    <div className="rounded-t bg-white mb-0 px-6 py-6">
      <div className="text-center flex justify-between">
        <h6 className="text-blueGray-700 text-xl font-bold">
          Register as a Mentee
        </h6>
        <button className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button">
          LOOKING FOR GUIDANCE
        </button>
      </div>
    </div>
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form onSubmit={handleSubmit}>
        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          User Information
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Username
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="lucky.jesse"
              name="userName"
              value={userName} onChange={(e) => setUserName(e.target.value)}/>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Email address
              </label>
              <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              name="userEmail"
              value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jesse@example.com"/>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                First Name
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              placeholder="Lucky"
              name="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}/>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Last Name
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Jesse"/>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Password
              </label>
              <input type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="*******"
              name="password"
              value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Discord UserName
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Jesse#0434"
              name="discord"
              value={discord} onChange={(e) => setDiscord(e.target.value)}/>
            </div>
          </div>
        </div>

        <hr className="mt-6 border-b-1 border-blueGray-300"/>

        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Contact Information
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Address
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" 
              name="address"
              value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"/>
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                City
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="New York"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}/>
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Country
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="United States"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Postal Code
              </label>
              <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Postal Code"
              name="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}/>
            </div>
          </div>
        </div>

        <hr className="mt-6 border-b-1 border-blueGray-300"/>

        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          About Me
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-12/12 px-4">
            <div className="relative w-full mb-3">
              <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                About me
              </label>
              <textarea type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)} placeholder="I am currently in High School and love Maths."> </textarea>
            </div>
          </div>
        </div>
        <hr className="mt-6 border-b-1 border-blueGray-300"/>
  <button className="bg-green-600 text-white active:bg-pink-600 font-bold uppercase text-xs mt-4 px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" style={{ background: loader ? " #ccc":"bg-green-600" }} type="submit">
          REGISTER
        </button>
      </form>
    </div>
  </div>
  
</div>
</section>
        </div>
    )
}

export default MenteeForm
