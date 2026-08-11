import React, { useState } from "react";
import { FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Cacquyt() {
    return (
        <> 
        <div className="w-[900px] ml-[300px]">
            <h1 className="text-[#2C3842]">Ծածկույթ</h1>
            <p className="text-[#2C3842]">Ամրակցված կապի ծառայություններով ապահովված բնակավայրերի ցանկի, կիրառվող տեխնոլոգիաների եւ մատուցվող ծառայությունների վերաբերյալ մանրամասն տեղեկատվությունը առ 01.01.2026թ. դրությամբ, հասանելի է այստեղ:</p>
            <p className="text-[#2C3842] mt-[15px]">Շարժական կապի ծածկույթով ապահովված բնակավայրերի ցանկի, կիրառվող տեխնոլոգիաների եւ մատուցվող ծառայությունների, ինչպես նաև ծակույթ չունեցող բնակավայրերի վերաբերյալ մանրամասն տեղեկատվությունը առ 01.01.2026թ. դրությամբ այստեղ:</p>
            <p className="text-[#2C3842] mt-[15px]">Միջպետական նշանակության ավտոմոբիլային ճանապարհների (մայրուղիներ) հատվածներում կիրառվող շարժական բջջային կապի տեխնոլոգիաների (մատուցվող ծառայությունների) հասանելիության վերաբերյալ տեղեկատվությունը առ 01.01.2026թ. դրությամբ այստեղ:</p>

{/* kisvel */}
            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center gap-4">
                <a href="#" className="text-slate-700 hover:text-[#1877f2] transition-colors">
                <FaFacebook size={18} />
                </a>
                <a href="#" className="text-slate-700 hover:text-[#1da1f2] transition-colors">
                <FaTwitter size={18} />
                </a>
            </div>
        </div>
        </>
    )
}
