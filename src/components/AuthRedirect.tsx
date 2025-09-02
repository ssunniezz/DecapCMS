'use client'

import { useEffect } from 'react'

export function AuthRedirect() {

  useEffect(() => {
    const hash = window.location.hash
    const hasRecoveryToken = hash.includes('recovery_token=')
    const hasInviteToken = hash.includes('invite_token=')
    const hasConfirmationToken = hash.includes('confirmation_token=')

    if (hasRecoveryToken || hasInviteToken || hasConfirmationToken) {
      window.location.href = '/admin/index.html' + hash
    }
  }, [])

  return null
}
