import React from "react";
import { useRouter } from "next/router";
function Compilation() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h2>Hello Compilations {id}</h2>
    </>
  );
}

export default Compilation;
