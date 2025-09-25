
// Mock util to build static Pix payloads with CPF and fixed amounts
// Replace with real generator or API later.
export function buildPixPayload({ cpf, merchantName='Apoio Do Bem Crowdfunding', city='Sao Paulo', amount, txid='DOEPIX' }) {
  // This is a simplified placeholder. Plug your real EMV/Pix generator later.
  const payload = `00020101021126580014br.gov.bcb.pix0131${cpf}520400005303986540${String(amount).replace('.','')}5802BR5913${merchantName.substring(0,25)}6009${city}62070503***6304ABCD`
  return payload
}
