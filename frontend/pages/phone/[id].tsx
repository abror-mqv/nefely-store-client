import React from "react";
import { useRouter } from "next/router";

function Phone() {
  const router = useRouter();
  const { id } = router.query;
  return <div>Phone number {id}</div>;
}

export default Phone;
