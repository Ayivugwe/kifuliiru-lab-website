import { redirect } from 'next/navigation'

export default function PublicationsPage() {
  // Redirect to the combined resources page
  redirect('/resources')
}
