import { sptfyGradient } from "@/style";
import { comp } from "csscomp";

export const Button = comp.button({
  d: 'inline-flex',
  bdrs: 2,
  px: 4,
  py: 2,
  bg: sptfyGradient,
  c: 'black',
  cur: 'pointer',
  us: 'none',
  trs: 'all .4s ease'
})
