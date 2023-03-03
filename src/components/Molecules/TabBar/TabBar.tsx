import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./TabBar.style";

const Menu: {
  label: string;
  code: "ALL" | "AS" | "EU" | "SA" | "NA" | "AF" | "OC" | "AN";
}[] = [
  {
    label: "ALL",
    code: "ALL",
  },
  {
    label: "Asia",
    code: "AS",
  },
  {
    label: "Europe",
    code: "EU",
  },
  {
    label: "North America",
    code: "NA",
  },
  {
    label: "South America",
    code: "SA",
  },
  {
    label: "Africa",
    code: "AF",
  },
  {
    label: "Oceania",
    code: "OC",
  },
  {
    label: "Antarctica",
    code: "AN",
  },
];

const TabBar = () => {
  const { query } = useRouter();

  return (
    <S.TabBar>
      {Menu.map((menu, idx) => (
        <S.Menu
          key={idx}
          continent={menu.code}
          isFocus={
            query.continent === menu.code
              ? true
              : query.continent === undefined && menu.code === "ALL" && true
          }
        >
          <Link href={menu.code === "ALL" ? "" : `/?continent=${menu.code}`}>
            {menu.label}
          </Link>
        </S.Menu>
      ))}
    </S.TabBar>
  );
};

export default TabBar;
