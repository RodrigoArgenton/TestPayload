import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../../../../components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { fetchPayloadContent } from "@/lib/payload";
import Link from "next/link";

export default async function Navigation() {

  const menuItens = await fetchPayloadContent('Hero', {
    limit: 5
  })
  const menuIten = menuItens[0];

  return (
    <div>
      <div className="w-fit h-auto rounded-3xl border p-1">
        <NavigationMenu>
          <NavigationMenuList>
            {menuIten?.Menu?.map((item: any) => (
              <NavigationMenuItem key={item.id}>
                <Link href={item.link || '#'} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.name}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  )
}