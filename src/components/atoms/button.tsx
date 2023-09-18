import { MyForm } from "@/models/user";


export function ButtonSuccess(props: MyForm) {
  return (
    <button
      className="bg-green-900 hover:bg-green-950 text-white px-4 py-2 m-auto font-bold rounded focus:outline-none focus:shadow-outline w-full"
      type="submit"
    >
      {props.label}
    </button>
  );
}
