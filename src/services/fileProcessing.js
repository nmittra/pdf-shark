export async function processFile(file, toolType) {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('toolType', toolType);

    const response = await fetch('/api/process', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('File processing failed');
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Processing error: ${error.message}`);
  }
}