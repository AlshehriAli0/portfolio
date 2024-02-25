import { useEffect } from "react";

import { useActiveSecContext } from "@/context/active-sec-context";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

type useSectionInViewType = {
  sectionName: SectionName;
};

export function useSectionInView({ sectionName }: useSectionInViewType) {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const { setActiveSec, lastClick } = useActiveSecContext();

  // * sync active section with the context
  useEffect(() => {
    if (inView && Date.now() - lastClick > 1000) {
      setActiveSec(sectionName);
    }
  }, [inView, setActiveSec, lastClick, sectionName]);

  return { ref };
}
