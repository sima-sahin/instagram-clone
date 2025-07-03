import appStore from "../assets/images/log-in/app-store.png";
import googlePlay from "../assets/images/log-in/google-play.png";
import phones from "../assets/images/log-in/home-phones-2x.png";
import screenshot from "../assets/images/log-in/screenshot4-2x.png";
import instaFont from "../assets/images/log-in/insta-font.jpg";
import { FaFacebook } from "react-icons/fa";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
// import { logIn } from "../firebase/auth";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slices/authSlice.js";


const LogIn = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { user, isAuthenticated, error } = useSelector((state) => state.auth);

    const handleLogin = async () => {
        if (!email || !password) {
            alert("Lütfen email ve şifre girin");
            return;
          }
        try {
            await dispatch(loginUser({ email, password }));
            alert("Giriş başarılı");
            navigate("/home");
        } catch (error) {
            alert(error);
        }
      };


  return (
    <div className="bg-black text-white w-screen min-h-screen">

      <div className="flex flex-row items-center justify-center pt-20">

        {/* SOL */}
        <div className="flex flex-col items-center relative">
            <img src={phones} alt="phone-screen" className="w-[380.31px] h-[581.14px]"/>
            <img src={screenshot} alt="screenshot" className="w-[220px] h-[508.83px] absolute top-5 left-30"/>
        </div>

        {/* SAĞ */}
        <div className="flex flex-col items-center">
            <div className="rounded-md w-[350px] pt-7 px-10 pb-7 outline-2 outline-gray-50/20">
                
                <div className="mb-7 flex items-center justify-center">
                    <img src={instaFont} alt="instagram" className="w-50"/>
                </div>
                
                <div className="">
                    <input
                    type="text"
                    placeholder="Telefon numarası, kullanıcı adı veya e-posta"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-2 bg-[#121212] border border-gray-50/30 rounded-md focus:outline-none focus:border-gray-50/40 text-sm"
                    />
                    <input
                        type="password"
                        placeholder="Şifre"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 mb-5 bg-[#121212] border border-gray-50/30 rounded-md focus:outline-none focus:border-gray-50/40 text-sm"
                    />
                    <button className="w-full bg-[#0595f6] hover:bg-blue-600 text-white py-2 rounded-md font-semibold cursor-pointer" onClick={handleLogin}>
                        Giriş yap
                    </button>

                    <div className="text-center text-sm opacity-80 my-5">YA DA</div>

                    <button className="w-full flex items-center justify-center py-1 font-semibold cursor-pointer">
                        <FaFacebook className="text-xl text-[#0595f6] mr-2"/>
                        <p className="text-sm text-[#0595f6] hover:text-[#0595f6]">Facebook ile Giriş Yap</p>
                    </button>

                    <p className="text-center text-sm mt-3 cursor-pointer hover:text-gray-200">
                        Şifreni mi unuttun?
                    </p>

                </div>
            </div>

            <div className="rounded-md w-[350px] pt-4 pb-4 outline-2 outline-gray-50/20 mt-4">

            <div className="flex items-center justify-center">
                <p className="text-sm">Hesabın yok mu? </p>
                <span className="text-sm text-[#0595f6] ml-1 font-[700] hover:underline cursor-pointer" onClick={() => navigate("/sign-up")}>Kaydol</span>
            </div>
            
            </div>

            <div className="flex flex-col items-center mt-4">
                <p className="text-sm">Uygulamayı indir.</p>
                <div className="flex space-x-2 mt-3">
                    <img src={appStore} alt="App Store" className="w-[136px]" />
                    <img src={googlePlay} alt="Google Play" className="w-[136px]" />
                </div>
            </div>

        </div>
        

      </div>
      <Footer/>

    </div>
  )
}

export default LogIn;
