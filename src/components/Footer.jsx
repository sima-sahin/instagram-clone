import { IoIosArrowDown } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col pb-12 pt-20 items-center justify-center">

      <div className="flex flex-row space-x-3 text-xs text-gray-100/70">
        <span className="cursor-pointer hover:underline hover:text-gray-200">Meta</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">Hakkında</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">Blog</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">İş Fırsatları</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">Yardım</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">API</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">Gizlilik</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">Koşullar</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">Konumlar</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">Instagram Lite</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">Threads</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">Kişi Yükleme ve Hesabı Olmayan</span>
        <span className="cursor-pointer hover:underline hover:text-gray-200">Meta Verified</span>
      </div>

      <div className="flex flex-row space-x-4 pt-3 text-xs text-gray-100/70">

        <details className="dropdown cursor-pointer">
            <summary className="hover:underline hover:text-gray-200 m-1">Türkçe</summary>
            <ul className="menu dropdown-content  rounded-sm z-1 w-20 p-1 shadow-sm">
                <li><a>English</a></li>
            </ul>
        </details>

        <span className="cursor-pointer hover:underline hover:text-gray-200 flex items-center"><FaRegCopyright className="mr-1"/>2025 Instagram from Meta</span>
      </div>

    </div>
  )
}

export default Footer;
