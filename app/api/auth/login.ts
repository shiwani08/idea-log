import type { NextApiRequest, NextApiResponse } from 'next';
// import { signIn } from '@/auth'/loginUI/page';
import LoginPage from '@/app/auth/loginUI/page';
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email, password } = req.body
    await LoginPage()
 
    res.status(200).json({ success: true })
  } catch (error: any) {
    if (error.type === 'CredentialsSignin') {
      res.status(401).json({ error: 'Invalid credentials.' })
    } else {
      res.status(500).json({ error: 'Something went wrong.' })
    }
  }
}