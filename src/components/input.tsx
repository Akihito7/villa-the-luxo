import { ComponentProps } from "react";

type InputRootProps = ComponentProps<"div">;
function InputRoot(props: InputRootProps) {
  return (
    <div
      className="w-full flex items-center gap-2 rounded-lg border border-zinc-300 px-3 shadow-sm cursor-text focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100"
      {...props}
    />
  );
}

type InputPrefixProps = ComponentProps<"div">;
function InputPrefix(props: InputPrefixProps) {
  return <div {...props}></div>;
}

type InputControlProps = ComponentProps<"input">;
function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent px-0 py-2 text-zinc-900 outline-none placeholder-zinc-600"
      {...props}
    />
  );
}

const Input = {
  Root: InputRoot,
  Prefix: InputPrefix,
  Control: InputControl,
};
export default Input;