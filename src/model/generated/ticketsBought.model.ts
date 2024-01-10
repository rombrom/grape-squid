import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class TicketsBought {
    constructor(props?: Partial<TicketsBought>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: false})
    wallet!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    count!: bigint
}
