// eslint-disable-next-line consistent-return
export function verifyStatus(status) {
  if (status.canceled_at) {
    return 'CANCELADO';
  }
  if (status.end_date) {
    return 'ENTREGUE';
  }
  if (status.start_date) {
    return 'RETIRADA';
  }
  if (!status.start_date) {
    return 'PENDENTE';
  }
}
