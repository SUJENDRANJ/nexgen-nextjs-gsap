"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/app/loader";

const RouteLoader = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    setLoading(true);
    setShowContent(false);
  }, [pathname]);

  const handleFinish = () => {
    setLoading(false);
    setShowContent(true);
  };

  return (
    <>
      {loading && <Loader onFinish={handleFinish} />}
      {showContent && children}
    </>
  );
};

export default RouteLoader;
