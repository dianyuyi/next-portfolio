export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  let revalidated = false

  try {
    await res.unstable_revalidate(req.query.revalidatePath)
    revalidated = true
    return res.json({ revalidated })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}
