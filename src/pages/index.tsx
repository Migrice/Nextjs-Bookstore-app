import { User } from "@/models/user";
import axios from "axios";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    axios({
      method: "get",
      url: "http://127.0.0.1:8000/users/",
      responseType: "json",
    }).then(function (response) {
      console.log(response.data);
      setUsers(response.data);
    });
  }, []);

  const create_user = () => {
    router.push(`${router.asPath}/auth`);
  };

  return (
    <>
      <div className="w-full mx-auto text-right px-4 py-4">
        <button
          className="text-black text-green-800  hover:bg-green-950 border border border-neutral-400 mx-2 px-2  font-bold full mr-8"
          type="submit"
          onClick={create_user}
        >
          {t("new_user")}
        </button>
      </div>

      {t("user_list")}

      <div className="mt-5 mx-auto  w-full">
        <table className="table-fixed">
          <thead>
            <tr>
              <th> {t("identifier")}</th>
              <th> {t("username")}</th>
              <th> {t("email")}</th>
            </tr>
          </thead>

          <tbody>
            {/* {users.map((usr: User) => (
              <tr>
                <td> {usr.id}</td>
                <td> {usr.username}</td>
                <td> {usr.email}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserList;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "footer"])),
  },
});
