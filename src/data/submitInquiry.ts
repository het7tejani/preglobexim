/** Deliver inquiries only after FormSubmit confirms this inbox is activated. */
export async function submitInquiry(fields: Record<string, string>): Promise<void> {
  const response = await fetch('https://formsubmit.co/ajax/priglobexim@gmail.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ ...fields, _captcha: 'false' }),
  });
  if (!response.ok) throw new Error('Could not send. Please email priglobexim@gmail.com directly.');
  const result = await response.json();
  if (result.success !== 'true' && result.success !== true) {
    throw new Error(result.message || 'Could not send. Please email priglobexim@gmail.com directly.');
  }
  if (/activat|confirm/i.test(result.message || '')) {
    throw new Error('The inquiry inbox needs activation. Please email priglobexim@gmail.com directly.');
  }
}
