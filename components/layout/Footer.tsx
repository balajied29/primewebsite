import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

const footerColumns = [
  {
    heading: "About PRIME",
    links: [
      { label: "About Us",             href: "/about-us"                                               },
      { label: "Our Team",             href: "/team"                                                   },
      { label: "Incubation",           href: "/incubation"                                             },
      { label: "Funding & Schemes",    href: "/funding-schemes"                                        },
      { label: "Contact Us",           href: "/grievance"                                              },
    ],
  },
  {
    heading: "Programmes",
    links: [
      { label: "CM Elevate",                  href: "/cm-elevate"                    },
      { label: "PRIME Rural",                 href: "/prime-rural"                   },
      { label: "Fellowship",                  href: "/fellowship"                    },
      { label: "Market Linkage",              href: "/market-linkage"                },
      { label: "Business Facilitation",       href: "/business-facilitation"         },
      { label: "Training Centres",            href: "/trainingcentres"               },
      { label: "PRIME Entrepreneurship Fund", href: "/prime-entrepreneurship-funding"},
      { label: "IFAD GAP Funding",            href: "/ifad-gap-funding"              },
      { label: "Student Tinkering Fund",      href: "/student-tinkering-fund"        },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy",        href: "/privacy-policy"       },
      { label: "Terms & Conditions",    href: "/terms-and-conditions" },
      { label: "Grievance Redressal",   href: "/grievance"            },
      { label: "Portal",                href: "https://portal.primemeghalaya.com/GeneralRegistraion.php" },
    ],
  },
];

const socials = [
  { label: "Facebook",  href: "#", Icon: FaFacebook   },
  { label: "Instagram", href: "#", Icon: FaInstagram  },
  { label: "LinkedIn",  href: "#", Icon: FaLinkedinIn },
  { label: "X",         href: "#", Icon: FaXTwitter   },
  { label: "YouTube",   href: "#", Icon: FaYoutube    },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="PRIME Meghalaya"
                width={140}
                height={42}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-[13px] text-gray-400 leading-relaxed max-w-[220px]">
              Meghalaya&apos;s premier entrepreneurship hub — empowering founders to build, grow, and thrive.
            </p>
            <div>
              <p className="text-[12px] text-gray-500 mb-3 font-medium tracking-wide">
                Stay in touch with us
              </p>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#52B788] flex items-center justify-center text-white transition-colors"
                  >
                    <s.Icon size={15} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-[14px] font-bold text-white mb-5 tracking-wide">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13px] text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/10 text-center">
          <p className="text-[12px] text-gray-500">
            © {new Date().getFullYear()} All Rights Reserved By PRIME Meghalaya
          </p>
        </div>
      </div>
    </footer>
  );
}
