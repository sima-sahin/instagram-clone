import appStore from "../assets/images/log-in/app-store.png";
import googlePlay from "../assets/images/log-in/google-play.png";
import instaFont from "../assets/images/log-in/insta-font.jpg";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
// import { signUp } from "../firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../redux/slices/authSlice.js";


const SignUp = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    console.log("Email:", email);
console.log("Password:", password);

    const dispatch = useDispatch();
    const { user, isAuthenticated, error } = useSelector((state) => state.auth);

    const handleSignUp = async () => {
        if (!email || !password) {
            alert("Lütfen email ve şifre girin");
            return;
            }
        try {
            await dispatch(signUpUser({ email, password }));
            alert("Giriş başarılı");
            navigate("/home");
        } catch (error) {
            alert(error);
        }
      };


  return (
    <div className="flex flex-col items-center justify-center bg-black text-white w-screen min-h-screen">

        <div className="rounded-sm w-[348px] pt-10 px-10 pb-10 outline-2 outline-gray-50/20 mt-3">

            <div className="flex items-center justify-center mb-1">
                <img src={instaFont} alt="instagram" className="w-50"/>
            </div>

            <div className="px-4 mb-4 opacity-70 flex text-center">
                <p className="text-md font-semibold leading-[20px]">Arkadaşlarının fotoğraf ve videolarını görmek için kaydol.</p>
            </div>

            <button className="w-full bg-[#0595f6] hover:bg-blue-600 text-white h-[33px] rounded-lg font-semibold cursor-pointer flex items-center justify-center mb-1">
            <FaFacebookSquare className="mr-1 text-lg"/>
            <p className="text-sm">Facebook ile Giriş Yap</p>
            </button>

            <div className="text-center text-sm opacity-80 my-4">YA DA</div>

            <input
            type="text"
            placeholder="Cep Telefonu Numarası veya E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-2 bg-[#121212] border border-gray-50/30 rounded-sm focus:outline-none focus:border-gray-50/40 text-xs"
            />
            <input
                type="password"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 mb-2 bg-[#121212] border border-gray-50/30 rounded-sm focus:outline-none focus:border-gray-50/40 text-xs"
            />
             <input
            type="text"
            placeholder="Adı Soyadı"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 mb-2 bg-[#121212] border border-gray-50/30 rounded-sm focus:outline-none focus:border-gray-50/40 text-xs"
            />
            <input
                type="text"
                placeholder="Kullanıcı adı"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 mb-5 bg-[#121212] border border-gray-50/30 rounded-sm focus:outline-none focus:border-gray-50/40 text-xs"
            />

           <div className="px-3 opacity-80 text-center">
                <p className="text-xs mb-3">Hizmetlerimizi kullanan kişiler senin iletişim bilgilerini instagrama'a yüklemiş olabilir. <span className="font-bold text-blue-200 cursor-pointer hover:underline">Daha Fazla Bilgi Al</span></p>

                <p className="text-xs mb-3">Kaydolarak, <span className="font-bold text-blue-200 cursor-pointer hover:underline">Koşullarımızı, Gizlilik İlkemizi</span> ve <span className="font-bold text-blue-200 cursor-pointer hover:underline">Çerezler İlkemizi</span> kabul etmiş olursun.</p>
           </div>

            <button className="w-full bg-[#0595f6] hover:bg-blue-600 text-white h-[33px] rounded-lg font-semibold cursor-pointer mt-1" onClick={handleSignUp}>Kaydol</button>

        </div>

        <div className="rounded-sm w-[348px] py-4 mt-4 outline-2 outline-gray-50/20 text-center">
            <p className="text-sm">Hesabın var mı?</p>
            <p className="text-blue-500 text-sm hover:text-blue-600 cursor-pointer" onClick={() => navigate("/")}>Giriş yap</p>
        </div>

         <div className="flex flex-col items-center mt-4">
            <p className="text-sm">Uygulamayı indir.</p>
            <div className="flex space-x-2 mt-3">
                <img src={appStore} alt="App Store" className="w-[136px]" />
                <img src={googlePlay} alt="Google Play" className="w-[136px]" />
            </div>
        </div>

        <Footer/>
      
    </div>
  )
}

export default SignUp;
