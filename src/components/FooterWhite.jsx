import { IoIosArrowDown } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col pb-12 pt-20 items-center justify-center">

      <div className="flex flex-row space-x-3 text-xs text-[#8E8E8E]">
        <span className="cursor-pointer hover:underline hover:text-gray-500">Meta</span>
        <span className="cursor-pointer hover:underline hover:text-gray-500">Hakkında</span>
        <span className="cursor-pointer hover:underline hover:text-gray-500">Blog</span>
        <span className="cursor-pointer hover:underline hover:text-gray-500">İş Fırsatları</span>
        <span className="cursor-pointer hover:underline hover:text-gray-500">Yardım</span>
        <span className="cursor-pointer hover:underline hover:text-gray-500">API</span>
        <span className="cursor-pointer hover:underline hover:text-gray-500">Gizlilik</span>
        <span className="cursor-pointer hover:underline hover:text-gray-500">Koşullar</span>
        <span className="cursor-pointer hover:underline hover:text-gray-500">Konumlar</span>
        <span className="cursor-pointer hover:underline hover:text-gray-500">Instagram Lite</span>
        <span className="cursor-pointer hover:underline hover:text-gray-500">Threads</span>
        <span className="cursor-pointer hover:underline hover:text-gray-500">Kişi Yükleme ve Hesabı Olmayan</span>
        <span className="cursor-pointer hover:underline hover:text-gray-500">Meta Verified</span>
      </div>

      <div className="flex flex-row space-x-4 pt-3 text-xs text-[#8E8E8E]">

        <details className="dropdown cursor-pointer">
            <summary className="hover:underline hover:text-gray-500 m-1">Türkçe</summary>
            <ul className="menu dropdown-content  rounded-sm z-1 w-20 p-1 shadow-sm">
                <li><a>English</a></li>
            </ul>
        </details>

        <span className="cursor-pointer hover:underline hover:text-gray-500 flex items-center"><FaRegCopyright className="mr-1"/>2025 Instagram from Meta</span>
      </div>

    </div>
  )
}

export default Footer;