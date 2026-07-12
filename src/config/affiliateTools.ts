export type AffiliateToolKey =
  | "solarCalculator"
  | "kfzCalculator"
  | "motorradCalculator"
  | "renteForm"
  | "berufsunfaehigkeitForm"
  | "lebenForm"
  | "unfallCalculator"
  | "riesterRenteForm"
  | "risikolebenForm"
  | "ruerupRenteForm"
  | "pflegezusatzForm"
  | "pkvVollversicherungForm"
  | "pkvBeamteForm"
  | "krankenzusatzForm"
  | "pkvStudentenForm"
  | "pkvUe55Form"
  | "hundekrankenversicherungCalculator"
  | "haftpflichtCalculator"
  | "hausratCalculator"
  | "tierhalterCalculator"
  | "wohngebaeudeCalculator"
  | "hausUndGrundbesitzCalculator"
  | "rechtsschutzCalculator"
  | "firmenForm"
  | "girokontoCalculator"
  | "baufinanzierungForm"
  | "kreditCalculator"
  | "kreditkarteCalculator"
  | "stromCalculator"
  | "oekostromCalculator"
  | "gasCalculator"
  | "dslCalculator"
  | "mobilfunkCalculator"
  | "pauschalreiseCalculator"
  | "mietwagenCalculator"
  | "c24BankLink"
  | "c24BankBanner";

export const affiliateTools: Record<AffiliateToolKey, string> = {
  solarCalculator:
    '<div style="width: 100%" id="tcpp-iframe-solar"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-solar/solar-iframe.js"></script>',
  kfzCalculator:
    '<div style="width: 100%" id="tcpp-iframe-kfz"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-kfz/kfz-iframe.js"></script>',
  motorradCalculator:
    '<div style="width: 100%" id="tcpp-iframe-mot"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-mot/mot-iframe.js"></script>',
  renteForm:
    '<div style="width: 100%" id="tcpp-iframe-rente"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-rente/rente-iframe.js"></script>',
  berufsunfaehigkeitForm:
    '<div style="width: 100%" id="tcpp-iframe-bu"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-bu/bu-iframe.js"></script>',
  lebenForm:
    '<div style="width: 100%" id="tcpp-iframe-leben"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-leben/leben-iframe.js"></script>',
  unfallCalculator:
    '<div style="width: 100%" id="tcpp-iframe-unf"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-unf/unf-iframe.js"></script>',
  riesterRenteForm:
    '<div style="width: 100%" id="tcpp-iframe-riester"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-riester/riester-iframe.js"></script>',
  risikolebenForm:
    '<div style="width: 100%" id="tcpp-iframe-rlv"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-rlv/rlv-iframe.js"></script>',
  ruerupRenteForm:
    '<div style="width: 100%" id="tcpp-iframe-r-rente"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-r-rente/r-rente-iframe.js"></script>',
  pflegezusatzForm:
    '<div style="width: 100%" id="tcpp-iframe-prv"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-prv/prv-iframe.js"></script>',
  pkvVollversicherungForm:
    '<div style="width: 100%" id="tcpp-iframe-pkv"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-pkv/pkv-iframe.js"></script>',
  pkvBeamteForm:
    '<div style="width: 100%" id="tcpp-iframe-pkv-beamte"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-pkv-beamte/pkv-beamte-iframe.js"></script>',
  krankenzusatzForm:
    '<div style="width: 100%" id="tcpp-iframe-pkv-z"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-pkv-z/pkv-z-iframe.js"></script>',
  pkvStudentenForm:
    '<div style="width: 100%" id="tcpp-iframe-pkv-s"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-pkv-s/pkv-s-iframe.js"></script>',
  pkvUe55Form:
    '<div style="width: 100%" id="tcpp-iframe-pkv55"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-pkv55/pkv55-iframe.js"></script>',
  hundekrankenversicherungCalculator:
    '<div style="width: 100%" id="tcpp-iframe-tkv"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-tkv/tkv-iframe.js"></script>',
  haftpflichtCalculator:
    '<div style="width: 100%" id="tcpp-iframe-phv"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-phv/phv-iframe.js"></script>',
  hausratCalculator:
    '<div style="width: 100%" id="tcpp-iframe-hr"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-hr/hr-iframe.js"></script>',
  tierhalterCalculator:
    '<div style="width: 100%" id="tcpp-iframe-tie"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-tie/tie-iframe.js"></script>',
  wohngebaeudeCalculator:
    '<div style="width: 100%" id="tcpp-iframe-wg"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-wg/wg-iframe.js"></script>',
  hausUndGrundbesitzCalculator:
    '<div style="width: 100%" id="tcpp-iframe-hug"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-hug/hug-iframe.js"></script>',
  rechtsschutzCalculator:
    '<div style="width: 100%" id="tcpp-iframe-rs"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-rs/rs-iframe.js"></script>',
  firmenForm:
    '<div style="width: 100%" id="tcpp-iframe-fc"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-fc/fc-iframe.js"></script>',
  girokontoCalculator:
    '<div style="width: 100%" id="tcpp-iframe-giro"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-giro/giro-iframe.js"></script>',
  baufinanzierungForm:
    '<div style="width: 100%" id="tcpp-iframe-baufi"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-baufi/baufi-iframe.js"></script>',
  kreditCalculator:
    '<div style="width: 100%" id="tcpp-iframe-kredit" data-duration="12" data-purpose="8" data-amount="5000"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-kredit/kredit-iframe.js"></script>',
  kreditkarteCalculator:
    '<div style="width: 100%" id="tcpp-iframe-cc"></div><script src="https://form.partner-versicherung.de/widgets/203108/tcpp-iframe-cc/cc-iframe.js"></script>',
  stromCalculator:
    '<div style="width: 100%" id="c24pp-power-iframe" data-scrollto="begin"></div><script src="https://files.check24.net/widgets/auto/1174331/c24pp-power-iframe/power-iframe.js"></script>',
  oekostromCalculator:
    '<div style="width: 100%" id="c24pp-power-iframe" data-scrollto="begin" data-eco="yes"></div><script src="https://files.check24.net/widgets/auto/1174331/c24pp-power-iframe/power-iframe.js"></script>',
  gasCalculator:
    '<div style="width: 100%" id="c24pp-gas-iframe" data-scrollto="begin"></div><script src="https://files.check24.net/widgets/auto/1174331/c24pp-gas-iframe/gas-iframe.js"></script>',
  dslCalculator:
    '<div style="width: 100%" id="c24pp-dsl-iframe"></div><script src="https://files.check24.net/widgets/auto/1174331/c24pp-dsl-iframe/dsl-iframe.js"></script>',
  mobilfunkCalculator:
    '<div style="width: 100%" id="c24pp-mobileservice-iframe"></div><script src="https://files.check24.net/widgets/auto/1174331/c24pp-mobileservice-iframe/sim-only-iframe.js"></script>',
  pauschalreiseCalculator:
    '<div style="width: 100%" id="c24pp-package-iframe" data-offer="allgemein" data-scrollto="begin" data-forward-url="no"></div><script src="https://files.check24.net/widgets/auto/1174331/c24pp-package-iframe/package-iframe.js"></script>',
  mietwagenCalculator:
    '<div style="width: 100%" id="c24pp-rentalcar-iframe" data-scrollto="begin"></div><script src="https://files.check24.net/widgets/auto/1174331/c24pp-rentalcar-iframe/rentalcar-iframe.js"></script>',
  c24BankLink: "https://a.check24.net/misc/click.php?pid=1174331&aid=18&deep=c24bank&cat=14",
  c24BankBanner: "/c24-logo.svg",
};
