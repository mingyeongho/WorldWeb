import Link from "next/link";
import { useRouter } from "next/router";
import * as S from "./TabBar.style";

const Menu: {
  label: string;
  code: "ALL" | "AS" | "EU" | "SA" | "NA" | "AF" | "OC" | "AN" | "Like";
}[] = [
  {
    label: "ALL",
    code: "ALL",
  },
  {
    label: "AS",
    code: "AS",
  },
  {
    label: "EU",
    code: "EU",
  },
  {
    label: "NA",
    code: "NA",
  },
  {
    label: "SA",
    code: "SA",
  },
  {
    label: "AF",
    code: "AF",
  },
  {
    label: "OC",
    code: "OC",
  },
  {
    label: "AN",
    code: "AN",
  },
  {
    label: "Like",
    code: "Like",
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
