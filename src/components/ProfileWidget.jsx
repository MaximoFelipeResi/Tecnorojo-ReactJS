import React from 'react'
import { Button } from "@chakra-ui/react";

const ProfileWidget = () => {

  return (
    <div className="cart-profile">
        <Button size="lg" variant="ghost" colorScheme="black">
            <span className="material-symbols-outlined">👤</span>
        </Button>
    </div>
  )
}

export default ProfileWidget;