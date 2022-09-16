import serv from "@/components/pool/mixin";
export default function (sfc) {
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(serv);
  return sfc;
}
