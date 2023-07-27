'use client'

import { usePathname } from 'next/navigation'
import { Category } from '@/types'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

type Props = {
  data: Category[]
}

const MainNav: React.FC<Props> = ({ data }) => {
  const pathname = usePathname()

  const routes = data?.map((category) => {
    return {
      href: `/category/${category.id}`,
      label: category.name,
      active: pathname === `/category/${category.id}`,
    }
  })

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {routes.map((route) => (
          <NavigationMenuItem key={route.href}>
            <Link href={route.href} legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                active={route.active}
              >
                {route.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MainNav
