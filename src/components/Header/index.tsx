import Image from "next/image";

const Header = () => {
  return (
    <ul className="flex justify-between bg-gray-100 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500">
      <li className="mr-3">
        <Image
          src="/logoLibertadores.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </li>
      <li className="mr-3 p-11">Andres Felipe Garcia Caycedo</li>
      <li className="mr-3 p-11">
        <a
          className="inline-block py-2 px-4 text-gray-400"
          href="#"
        >
          Link Documento
        </a>
      </li>
    </ul>
  );
};

export default Header;
