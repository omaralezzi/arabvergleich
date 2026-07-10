export type AffiliateToolKey =
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
