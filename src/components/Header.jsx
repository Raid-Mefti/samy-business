export default function Header() {
    return (
        <div className="sticky top-0 z-1 w-full  navbar bg-white shadow-blue-300 shadow-2xl ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    ></ul>
                </div>
                <a>
                    <img className="ml-14 h-24" src="logo2.png" alt="Samy" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="ml-10 menu menu-horizontal px-1 text-black text-2xl gap-10">
                    <li>
                        <a>À propos de nous</a>
                    </li>
                    <li>
                        <details>
                            <summary>Produits</summary>
                            <ul className="p-2 bg-amber-50">
                                <li>
                                    <a>produit1</a>
                                </li>
                                <li>
                                    <a> produit2</a>
                                </li>
                                <li>
                                    <a>produit3</a>
                                </li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <a>Services</a>
                    </li>
                    <li>
                        <a>Contact</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-end mr-7">
                
<button className="btn bg-white border-none" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } }>
  <img className="w-12" src="terre.png" alt="xxx" />
</button>

<ul className="font-bold dropdown menu w-52 rounded-box bg-amber-50  shadow-sm "
  popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }  }>
  <li><a className="text-black">francais</a></li>
  <li><a className="text-black">anglais</a></li>
</ul>
            </div>
        </div>
    );
}
