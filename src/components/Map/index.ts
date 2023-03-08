import dynamic from "next/dynamic";
export default dynamic(() => import("./_Map"), { ssr: false });
