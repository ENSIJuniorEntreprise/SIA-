import { useState } from "react";
import heroImage from "../assets/image/different-car-accessories-composition.jpg";

const products = [
  {
    id: 1,
    name: "LUBRIFIANT 2T DIMABIKE SINTETICO 4L",
    reference: "DIM-40026",
    pscCarton: 4,
    size: "4L",
    image: "https://www.sea.com.tn/980-large_default/lubrifiant-2t-dimabike-sintetico-4l.jpg",
    tag: "2T",
  },
  {
    id: 2,
    name: "LUBRIFIANT 4T DIMABIKE 20W50 1L",
    reference: "DIM-40022",
    pscCarton: 20,
    size: "1L",
    image: "https://www.sea.com.tn/978-thickbox_default/lubrifiant-2t-dimabike-sintetico-1l.jpg",
    tag: "4T",
  },
  {
    id: 3,
    name: "Huile moteur Magnatec 5W-40",
    reference: "cas_40021",
    pscCarton: 11,
    size: "5L",
    image: "data:image/jpeg;base64,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",
    tag: "Castrol",
  },
  {
    id: 4,
    name: "Huile moteur CTX 20W 50",
    reference: "CTX-40026",
    pscCarton: 4,
    size: "4L",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhAQEg8VFRAVERUXFRAVFRUVFRASFRUWGBUVFRUYHiggGBolHRUVITEhJSkrLi4vFx8zODMtNygtLisBCgoKDg0OFxAQFy0lHSUtLS0tLS4rLS0tLS0rLS0tLS0tLSstLS0tLS0tLS0tLS8tLS0tLS0tLS0tLSstLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQBAgUGBwj/xABEEAACAQIDBAcECAMGBgMAAAABAgADEQQSIQUxQVEGEyIyYXGRcoGx8AcUI0JSU6HBM3PRFkNiouHxF1SCkpPSJGOD/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAA5EQEAAgECBAIGCAYBBQAAAAAAAQIRAzEEEiFRE0EFIjJhkaEUUnGBscHR8AYVI0KS4UMzRFNi8f/aAAwDAQACEQMRAD8A+4wEBAxAzAxAQEBAQMwMQMwEBAQEBAQEBAQEBAQEBAQEBAQMGAgDA+d9IPpMFGpUpUKAcoxU1XayllNjlUakXG+4nPfXiu0PqOB/hq2tp11NW+InriI64edq/Sbj9+Wio8Kbfu0wtxOpHXD1o/hjgo/utP3x+iL/AIpY8cKJ86bfs0z+manuVt/DXB+U2+Mfo6Gz/pdqj+PhUYC1zSZkNuYVr39RN6cRMxMzDztf+HdOP+nqT9/+sPqezsamIpU61M3p1EDKd1wRxHA+E64mJjMPl9TTtp3mlt4WZKjBMGWM0IyZhBmGOsHORkzB1g5xkzDYGSlmAgICAgICAgICAgICAgIGIHI6X416GDxNWm2WotPstvykkAEX46yt5xWZdvo3Qrr8Vp6d9pnq/PjH4zyrT1fqWMdIWsTTtQY/42/QTotX+l97jm3r2+xyq3934k3nLEdF9WfW021GuU+sgbspFuFiDN6TjMe5w6vXxP8A1mH1v6F9rvUo4jCsBkw7KaZ42qtUYg+RH6zo4a04mvZ8t6f4elNWNSu9s5+7D6QTOp8/KOFMozIGCDzkYQ1yyEoKmIVd5kqzMQ1TFX3EiCLL1GvfQ6H9D5SWkSnkrEBAQEBAQEBAQEBAQEDEDz/0gU82z8WM2X7MG9r3KspA3jeQBfxlNX2Jel6HtNeN0piPP8XxfZGFw1WoErV3pKR3wmcZtAFsNbanXwnn0rW1sS/QOL1eK0tObaVItPbOOn3ur0g2VhKNMZMXVqhm1QU8oW473ab4TfW04rXecPO4LiOL17TFtKtem8z+jzb08PoC1aw1BCpe/wD3bpxc1ff8noamnxExHSuY98pq2AwPVNV+vv1j2zYb6uc41t384Q89+6b1iuM5eZfV4mdS1J0oxO9ubp+GXuPoSy9bjsjFkyUSSyhGzXqblDMLb9b+6dHD7zh4np6bTXT5o69dpz2fVjOp8zMsEwhrAQObtHG5eyN8hS1uzkOzbyCL8wRJZTMp8NV1giXWp1ARY7pDWJWada2/VefLzjLWJWQZKzMBAQEBAQEBAQEBAQMQIMbUCrqAQTax3e/0hE2mvWHGo9H8Jofq1G/Pq0v8JWKV7NI43if/AC2/ylLV6PYN+9h6R80U/tJtETuvXjeJrtq2+Mov7J4D/k6P/jT+kp4VO0LfzDip/wCa3+Un9k9n/wDJYf8A8Sf0k+HWPJSeM4if+W3+Urmy9j4fC5+ooU6ee2bIirmy3tew8T6y0ViNmV9bUv7dpn7Zyv3ks2rGENC8CDF18qkyETLbZeGAUVCO2wvfkDuAkrUr0yu1KYYWIuDwMLzGXGxmyinap3K8V3keXOGF9LHWEVCrDOJXaVWMNIlPTqW1G78P9JXZpFlqnUDC4/2ll8t4SQEBAQEBAQEBAQECntNSUBAvY3I8LG/xhS8Zhz0xI/CfSGGUgxQ/CYTzNxiRyMJy2GIHIwcywrQtDYKY6rYZsecjqYaMeYjIgxNDMumohWYWcC/ZC8QLekL1nosyVyBTxeAD6jR+fA+YhnakS5+VkNmFj+h8oYzExumSpITEp0biDY8+fnDSLLFKvfQ6N+h8oyvEp5KxAQEBAQEBAQEBAjrd1vZPwhE7OZR3Q54WAsLNgsDZrAQYKK8TC0Q2zE7oyt1lHnW9usW/LMJzfTOH5uXxIz9sL+FbfCTUb50bqbNChGo9IQ1tfUaNCE9KtwbQ/GStFu6eFyBpVpBhYi4hExlzq2EKajVf1HnDC1JjZGjwiJTBgdD/ALSF4lLSxBU2Y3HBuXnIyvFlwSy7MBAQEBAQEBAQI63db2T8IROzmUN0OeFlYXbjSBqgzG/CCEja6CFniunHSR6KHqRmVatNWGv2gaoqvax5E28ec+b4vivpnETw1bTFIiczHnMfk9bS0PB0vFmOryeD6ZV+ret1dIoq0LKFa7PXooyjNn/MqItsu477zz7+h9Cbxp805nm84/tn7O0T57otxFpjOHueh3SF8ThlruoCszKEAItkOR95P31f3ATOPSGp6K4jwMzamI6TvGevT7sdGEacasZ83paNUMLqbjlxHmJ9fwvF6XE0i+lOY/e7l1NO1JxLLJfUb50Sza34N6yEN1qFd+o5ycpzhYVgZK8S2hLECrXwgOq6H9DDK1M7KhBBsd8M9m41FjImFolNga33Dw3eXKRDSsrssuQEBAQEBAwYGYEdbut7J+EInZzMPuhzwsrC7V2ubCEbptwtJXcfpHtTqU6tT9q496Jz8zuHv5TxvS/HeDp+HSfWn5Q9P0dwni257ezHzeJ2mzBKTKrNlr0iyopdsga7dkamfKcLy89omYjNbYz064evxWcRjvDzVXBY37c06NUdpgMq2PWL9dOHCW/ugRgNB2BlF9zT2q8RwscsWvX4+Xq82ff7fv7eTxr1vmen76/6ez6I08SjYsYhagXrX6gHSkKJr1yLAaZ9b+waVuM8P0rfQvXSnRmJnHrd84j5fnlOhmLTl1qmIam2ZWsfj585y8HxGpoWi+nOJejGnXUry2h1dmbbp1SEYhKvAX7L+yefhPt/R/panEYrfpb5T9jzeJ4C+l61esOswvoZ7GHno9V8RIQyNNV9IPsT0qwPnJWiySFmYEGJpgjxhS8KoWGSOr2SGG8SsrOmjXAPOWbNoCAgICAgICBHX7reyfhCJ2cuhDnhO72ElOW9BbC53wtEJ6S31kLxDm7TxjZ2p0wuZVJLFb6jLoOA0ZTex37t859W0RnEZlXU1bV6UiZns5dfayUqNavUxLAUlBZVSiSbmwC3Qak2HvEzrak1mbVx90OjhNHiNe8Ums1me8Yj3z9yrhekQyscQ9fDlappm9FKiBhl1NVKZVRdwuvEHfYy2Kf3Vx90Oq3BXmcaV4t0zvET5+U/YYnpRSU0gmIr1OsrdWGXDgJYXzujGlaoFym4W/prIxo9MVj4QmPR+vi3NaIxGcZjPXaPdM+9LQ6R4V2RRjql3IClsMFBzdw5mpWAb7pOh1tJiNHtHw/0i3AcTWJnt748t/h59lvYeJOITDVgWyVS56t0o36pMwDnKotc5D/1CXpSkxExHyhhxFL6OrOnNs46T+b0rLebsETIR5QrMISttRKoa3B3aNJQlpViNGhMWxusZhJXzCOo99IUtOWgSFcIK40MgT7Pa6DwuPQxDSuyzJWICAgICAgIEdfut7J+EInZy8Puhzw3pjO3gITHWVoC5tDSFgU4aPP9INlVmLPQYgsLELlNjZQbq+jKQq+IsbXzac2vo2v1rbEubX0tS3XTtNZ7w87/AGZc0HVqi/WGq0nzdVRWmBSa4RgrBmB4kngNOdNPQtFes5l3cDxevoT/AF72v0mOs7ZjHTf8EeJ6L16j03fGNVKlGPWqH+0V2chB1wC0ySoI32W15pOlMzEzLvr6TpWlq10sZzHScdJxHXp1nHn784ZHRaqCXXEKrn6z2RSXq6LYhFQmivXXQgLxJ3mRGljz7/Mn0pE76fnXz6zy53nHXf3M1uhmd6mSqy0ciZEFNCyVKVA0aJZus1VbswAA1O+J0es/vywmnpaaxX1MzG/XeObmn7Jmd5ep2BhmpCjTddKWGWkrgKq9m2bs52IuAnPuNu0m1Yw8zUv4mpa/d3QwO4y6rMCF6XL0hWYU8SLa8ZVSW1OqGGvrJREt7keXOE4SIRJiSGxMJlWfjIVk2N3G/mN+0QvTZ0JK5AQEBAQEBAjr91vZPwhE7OMHsviYcy7h0yrENKxhapC2phpVu1QAE62AuT4CFnwzpF0x2htLaT7OwNTq0SoyFhbTIcrN4m+g1HuFyA1r7Hek7Uq3SOqtVdGBxGXUgEEA8CCD74GvSLYWIwmBbHjbWKemVBphazHrbsACDYC1iTccBAx9H3RnaG08MuJbamJVS5GXr3XsgldLAkm4biOHnA5u3dt43YW1GzV6lWhlYolR2cNTYGykkkmzC28XK++EPXfR7sHaGOqHaGPxFUUmOenhhUdVud10U20H3dw4i9wCX1rDoqgKosBw5QJYCBTx40kM7udReIZLS1bQtEtwwO70kLN1qQMsLwNdk91/5h+AkwvTZekrEBAQEBAQECOv3W9k/CETs4uGXMw5CHPHWXTVbm0lrCyABIaNagDAqb2IIPkYHwvafRLaGytpvtHC0RWpu7sy3CkdYczWLdm19QL3G4gjUhw+kWxcXtWvQVNmdQSwFWrmpuz3sM7sNWAXhwt46B7L6ZsBXrUsHs7B0HdVy5so0QIoFO58Qx08IFvHdJV2Fs+hhKSGpjBSAyKpIQ2tnqW3Xte2h8oHjsR9GmNxmEq7Qr1C+NqAOlEkDs8rnS9gOQA08QH0v6KNpYgYNMNjabJXokIpNm6ylcBDdSd1wDfzge7ZfWAVrwNoFTaHdhS+zkI1vWRDBo+JhGSnitYIsvU6wMNInKVavCQnKTZB7L/zG/aTDSmy9JWICAgICAgIEWKayOf8J+EInZzsBTst4hjVforxktapNPOQszc8oDWBjPzkTOBqbHhofQ+6RzCpT2Th13YWiPKkgv8ApLBjtsYaiQlXEU0bgrOoPpwk4Vm0R5rOGxK1FDI6up3OpDA+8SExMSkSoG1BBFyLg31BsR6iRFonZIw4/NpI2BgVdo92FL7OEzb5DnXtnbMDAO+t9y7tOZktaaeesrdfZVMjQZTwIv8ACFp04lyFJRijbwbSGG0t61TTfIlbLodHz9mfbb9pMNqbOnJXICAgICAgYgUtqv2Qv4mHoNf6QpeehSWwAkqxCyOX6SGkM5vkQk936wMZvAyJFHH1n7Socug+1IBGpN1UcwBfUe+cPFa06dZnOPf+UNKViXlsf0uK1CuHppa9utqsTnfQWRbjTdxnBTj5tbGnXr8ZehThaRXOrb7od+ljq9SgahVQwQ6LxbhvvYDU213e6e5p801jm3eXqzXM8mz5tt7ZdPEFqtHMK/36LklnPFkY94+G+axLjt1cvo9tavg6mekSLHtUzfK45MP33iThEWmr3OyNsqMUKqm1Oq4VkP8A9p7N/FWsPXnPmaXnh+PtXytP4ve5fG4aLRG0fg9VsnavWVMRQcWq0KgDcmR+1TYHxUi44Ge3pakzNq23hxWpiItG0uomlx6eU3Zq20e6IZ32cGruMhhL02H7q+yPhJdUbNzCXn9qfxm8l+AjDm1PaVXjCsS7HR/+Efbb9pEOimzpyVyAgICAgIGIHNxpzVVHBV/U/IhleeuFmnJWhln+efzykLo2q/P+n+sDHWAf7D+kIV8Rj1pgkkADex7IHIXFwxtwnLxHE10ozLWmnNp6PObW6SK9NwtzmUKptlNmLZmtfTRf1E8LieOjWiYrHXyd+hwsxMTLwGP6Slx1VNRSooRZRa7XJzOx3s3nuvwntcHp1pFado+bzOJvaYmZ83c2L0nq9WqimRhs6oX55gRcsd5uV9dwnfLli84TV6CKS2vPUyuVZWti7ITEozNvBOUneByJ4iXicFa8yjtnZ3UXsbMUYA+RDA+o/WeB6YxGrp3j94e36MmYpak7PcUsNbHdYKdlfDKGb8bq1wb21IAGt76DkJ2/9xE43qw5s6U17S77cD86zvc6ttHuiFLuFUHZaQ55elw/cT2R8JLqjZuYS89tX+M3kvwkuXU9tAy6SFXX2CPsz7bftIh06ezpSVyAgICAgIGIHKpnNUqN/it6aQw81tmtDWqliMTaEqFTH+MDSrjwis/Ifr4Tn4riI0aTbz7NNLTm9oh5Pb3SECmpNmIsxU6qxL7m1udAL6/eInhaU24vUitv33+L0NSI0NObw4I2o+LOcqoNyCF0Frdiw4ch5SnG0iurzRHSfya8Jqf0+WZ6/q4OydmZX+1YEq5HVtoCBfK3iCP13z2dHV6VvXZ5OtTrNZe8+xrUTRpNmLLY37LLbdZByI8tNJ31vW20uK1Jr5OVjMTVp5aWIUo+4Oe7VA4qd1/CWx1Ves6J1cqmw058InZrp9Ee3V67ECkpvoi6XurOTe/jqPQT5v0jbxuIrSNtvju9rhq8mlNpe7NO7KeQnu8vrR7nn83SUtTcZqqrbR7ohS+zhv3WkOd6PDdxPZHwkuqNksJee2mPtm8l+Akw5dT22wp6SJF7Yg+zPtt+0iG+ns6MlcgICAgICBq5sCeQglysANL8Tr6wwqkxb2+fnwiWsPM7Vx2W+sEy4Q2jvPLhfeb2/ec3E8RGlGI9rya6OlN+vkq43aGiuGtcnyUqDl9wJM8C02teurfz+HR6tKxFbadfKHn8TTasr5i1ussWIsWUnvAcr3nVqTHD8TF/KY/+ubR/r8PbT8/zjZcw+yvq9xlbq2X+INVb8Jzfdbzm/HaE6mnmvXzhzcNq8t8W6eUoyVNxWUMttGuQytu1I1K6f6XGvHwvE+HWa+X4fvzd+vwsauLV3/F1KOGpmkxVarqh7TqgVATu7ThRe1r21+M9Ln0o0vEvb4PMmmr4nJWvxdvYvQ4YqnnqVXWkWI6tWLFrbzc9ka3HdO6b8NeurTnrnHvRqaU1nFsOrjEwWykCUKYbEtoiE5nJ/Eb6IBvuABMuN4yNKkxWfW/D3tuG4TxJzjoj6FbOZ3NdzmAJ7f5lY7yP8KjTz8p5/ozQ8S/jTtG3vl2cbqRERSP3D2ybh5T33mMtAp47uD54Qzvs4bd1pDB6XDdxPZHwkuqNkkJcHHj7dvJfgJPk5dT20oXSRKVrY/8ADPtt8ZENqbL8lcgICAgICBBjmtTf2T+ukItsp4QWAksaocfeQ2eI6QkgEyLTisyVjMvK5yba23jwG4j9541/Vtzz1nf7d4l3x1jHks08OKgCk2cg5dezc2zee79ZnHJyzpXnpvWezTmtFo1K77THdPRqqBleneraw7QGnOx0ZfH95n49NSnh63ltMeSLcPal/E0fPeFqnjHpAIXdaanRkK2txAZwRY+IBnPo8XqaPq1nNe36NNbhaa3rT0lFjaFKqWqJUZGY3A1a9+BPHjqJzW17WvMzVvo0mkRWFWnsutZqgw1UIfvU1JA8t+Wb107WrmIzDebaW3NGXVw1bE5VpU6mNKWsFSk6/wCY6AfpLVnirRy1icfb+jK1NGs804z9sLGG6Oqjl8ZVFBDqwNTPXqa/ebWwN+fHdxm2nw0c1Y17RHu85/RlfivVxpRn8H0zDUFpoqIoVFFgo3ACfRUrWtYisdHj2tNpmZ3SU9w8pZDLbjAp4/uD54RLO+zhvubzkMHpcP3V9kfCS6o2SQlw8b/GbyX4CS5tT20nCVIWtkfwz7bfGIbU2XpK5AQEBAQECptM/Zt5qP8AMIUvsiw+6Szq1xdO9/n54yG7zW1MBmvpCryz7Cs1wSPCc1+FpfeZaV1rQt4bo9TbRg1r7gxA9BaU+gaPafiv9J1Hew/R+gVs1LMOTMzAeQYkR9A0Pqp+k6vdfwPRrDUyGXDpcHTTd5e/T15RHA6MTnBPEakxjLqUNl0AbihTDX7wpoCbb2vbiZv4NOyniX2zK8FuPPw4S3IrlTTZNNaiVEuhSmUVFJFMBjfubr79fHwFs/Bjm5o3xhPNOMNMPsSktQ1Mt3Jza7gx4+e/Xy5TLT4KlLTeesrzrWxh0cthYfN514ZJBJGlXdArbS7oiWeps4Lbj5yGD09Dur7I+El1Rs3hLi41T1zHwX4CHNqR6zbhIkha2R/D/wCpvjENqbL0lcgICAgICBS2p3B7S/GFNTZrRG6SpVNUS8hspV8PeEKb4AHhAzTwQEC5SoW+fn55QLKJ8/08fhCVfF4qojZUoh+yDfOFtqdLHkBv8ZjqalqziIy209Oloza2PuRUtp1iRfDAC9i3WrZRe17ftKRrX86/NpOjpxtf5SwNqVd4w1+f2qfCPHv9X5ngaf1/lLY7TrX0w4IIBv1q8Vub6cDce6PGvn2fmjwdP6/yYO06xt/8XXl1i3vbyjxdT6vzI0dP6/ydWgxKqSuUkAld+U21F50VmZjq57RETMQydSPCShV2n3REs9TZxqY3yGD0WHYFVI3WEl1VnMN4S5WKa9Rvd+ghz3nq1hELuzB2PeZENqbLclcgICAgICBS2p3V9sfAwz1NmtHhCsLRHr8YbNCsDTq/n5/pAZfH9YGVX53/AKDSBKB88YHjulG02XFph0o0CxoA569RkzZ2ZBTFiLk33ePhPP4jU/qxSIjbz/B1aOYpnM7+Tj0No4hkFsFhxmJGQ1KudQDUUEjNcKWpuo5keU563vj2I+LWbzn2pQ4rbVamOtbB4cfZ0qt81W+WtfJpm39lrjhaVtqWr600jaPmtFpn1eefkDaVRhRH1bCFqwBFPrauZUIZs7rm7K2ViTHNnHqR198p8W8Z9aenuhHiOl1ahWN8LQ61TfMGqMCGW4ZTm1Uq9/fK24udO/sxlWKc1cc04S/8S8T+RR/z/wDtLfzO/wBWFfote7A+krE/kUf8/wD7R/M7/Vg+i17u10b6U1ceay1KaKEVSMmbXMSNbk8p18JxVtaZiY2cnFaMUiMS6SHf5zucK1h8S1PdqOR/blJTW8wmfaTsLBQvjvPuhedSZQ0xCiXhITC7szue8xDbT2XJK5AQEBAQECjtTcn8wfBoUvsxS4SVIW78D6yGwfH1gLQHrAz7zADy9YHzvph1a7SSpVqKmTCq9PrM2R6yu+QHKCbAnMdPu24zyuJiPpETM7R83XpTPh4ju4+G2zSprSc11aoDQpsBmvajialR6puLZSpW3G7HTSYxrViInPXpHwleaTnGGu2NtYdqYAy1bYlh1ZLKHw9LrupJK2I/jE7/ALsrratJr36/KM4NOkxP3NcDtOkKdEVa9MsSyplU5sLRfD1qZWo2UEjM9M2u3dJil4xXmn/UYTas5nEf7cbbeJR6vYcMq06VMONA5p0kQsL62JU28Jza0xNunliPg104mI6qGccxMcNDOOYgey+jY9rFa/cT4tPU9Gb2efx3s1exWeu8xaRbycjcUoMJAtpC2BhCIXdnLZPeYb02WpK5AQEBAQECjtQdlPbHwMM9TZikN0lWIbJtCk9VsOGvVUEsljoAEJ1tb+8T1kNlrUeIgBY+cDNjzgNfCAt4wOBtanievXqyOpyqSD1ehAqAjta2OdD/APkOZkTETuOfQp43sXFyrU81ups6KanWe9h1Ztwvvkcteycyt4elierysl6q1qd2HVHPSCAMRu3spY6DvaDhHLXsZlXXD47IVK9vq2AqDqbBgxAbL+IizcgLDnHLXsZlMlHFmnVulqhqLlA6qwXqtyndlFS1762va8ctexl1djUnyWrU+2DvITUWG7L7xHJXsZlf6hfwr6COSvYzKptFAF0AHkLRiI2Zak9HFWSwhYotCVsPC2WC0DBMlGF/A933mG1NlmFyAgICAgIFHaxsqfzB8DDPU2RUqoHGFIlEmDoCscQEy1iCC6swDBst8yg5W7q7xwhfnXxixBzwHEqeEJ54Y+sDmfWDng+sDn8IOeD6wOfwg54U6+DoVGzumZtwNzuItwPK/rBztV2bhgQwpWIFtGbu5StrX5Ej3wc6fB0KVEsaa2LWzdpjci9t5PODnhOa4Plyg54bfWRBzwfWRBzwfWhBzwp7Qr3Ehne2XJB3+cM26GBaSSluIIYJkJmXR2f3B5mS2pstQuQEBAQEDECltekWpm29SG9N/wAYUvGYc+m2kMG94C8DMGQQMEwGbzgCfP1MDGb51/rA2BgLwZLwF4C8CtimhEqw3CEJaTAb4TC0KghYNUQhvQw7VDusv4v6c4WrWZdimlgANwhvEYbQkgICAgICBgwOViMAym6ar+HiPLwhjanZXyv+W3oYUxPZmz/lt6GSYnsWf8tvQyDE9iz/AJbehgxPZmz/AJbehkoxPYs/5behkJxPYs/5behgxPYs/wCW3oYRiexZ/wAtvQwYnsWf8tvQwYnsxZ/y29DCcT2LP+W3oYMT2YIf8tvQwjE9lerh6jG3Vt6EQcsr+E2TcXqXv+EEaDxMlpXT7uolJRoFFvKQ1iIZyDkIMQZByEGIbQkgICAgICAgICAgIGIGYCBiAgZgICAgICAgICAgICAgICAgICAgIGDAQMwMQAgDAzAxAQEDMBAQEBAQEBAQEBAQEBAQEBA//9k=",
    tag: "CTX",
  },
  {
    id: 5,
    name: "Huile moteur Professional Edge Titanium FST Long life 5W-30",
    reference: "EDGE-40022",
    pscCarton: 20,
    size: "4L",
    image: "https://placehold.co/160x160/e8eaf6/555?text=Edge+5W",
    tag: "Edge",
  },
  {
    id: 6,
    name: "Lubrifiant semi synthétique 5W-40",
    reference: "GTO_40021",
    pscCarton: 20,
    size: "4L",
    image: "https://placehold.co/160x160/fce4ec/555?text=5W-40",
    tag: "GTO",
  },
  {
    id: 7,
    name: "LUBRIFIANT 2T DIMABIKE SINTETICO 4L",
    reference: "DIM-40026",
    pscCarton: 4,
    size: "4L",
    image: "https://placehold.co/160x160/f5f0e8/555?text=2T+4L",
    tag: "2T",
  },
  {
    id: 8,
    name: "LUBRIFIANT 4T DIMABIKE 20W50 1L",
    reference: "DIM-40022",
    pscCarton: 20,
    size: "4L",
    image: "https://placehold.co/160x160/e8f0f5/555?text=4T+1L",
    tag: "4T",
  },
  {
    id: 9,
    name: "Huile moteur Magnatec 5W-40",
    reference: "cas_40021",
    pscCarton: 11,
    size: "5L",
    image: "https://placehold.co/160x160/e8f5e8/555?text=5W-40",
    tag: "Castrol",
  },
];

const filterDivision = ["Division Pièces de Rechange Automobile", "Division Industrielle", "Division Marine", "Division Travaux Publics"];
const filterSousDivision1 = ["Moteur", "Suspension", "Freinage", "Filtration"];
const filterSousDivision2 = ["Lubrification", "Pistons", "Courroies", "Échappement"];

const Breadcrumb = () => (
  <nav className="flex flex-wrap items-center gap-2 py-4 text-sm text-gray-500">
    <a href="#" className="text-gray-600 hover:text-red-700 transition">catalogue</a>
    <span className="text-gray-400 text-base"> &gt; </span>
    <a href="#" className="text-gray-600 hover:text-red-700 transition">Division Pièces de Rechange Automobile</a>
    <span className="text-gray-400 text-base"> &gt; </span>
    <a href="#" className="text-gray-600 hover:text-red-700 transition">Moteur</a>
    <span className="text-gray-400 text-base"> &gt; </span>
    <span className="text-[#c0141c] font-semibold">Lubrification</span>
  </nav>
);

const FilterPanel = ({ filters, setFilters, onFilter, onReset, showMobileFilters }) => {
  const handleSelect = (key, val) => {
    setFilters((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <aside className={`w-full lg:w-64 flex-shrink-0 bg-white rounded-lg p-5 shadow-[0_2px_12px_rgba(0,0,0,0.07)] lg:sticky lg:top-5 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
      <h3 className="font-['Raleway'] text-sm font-bold text-[#1a1a2e] mb-4 tracking-wide">Chercher par</h3>

      <div className="mb-4">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Sélectionner un Division</p>
        <select
          className="w-full px-3 py-2 text-xs text-gray-700 border border-gray-200 rounded-md bg-white cursor-pointer outline-none focus:border-red-500 transition"
          value={filters.division}
          onChange={(e) => handleSelect("division", e.target.value)}
        >
          <option value="">-- Division --</option>
          {filterDivision.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Sélectionner un Sous-Division 1</p>
        <select
          className="w-full px-3 py-2 text-xs text-gray-700 border border-gray-200 rounded-md bg-white cursor-pointer outline-none focus:border-red-500 transition"
          value={filters.sousDivision1}
          onChange={(e) => handleSelect("sousDivision1", e.target.value)}
        >
          <option value="">-- Sous-Division 1 --</option>
          {filterSousDivision1.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Sélectionner un Sous-Division 2</p>
        <select
          className="w-full px-3 py-2 text-xs text-gray-700 border border-gray-200 rounded-md bg-white cursor-pointer outline-none focus:border-red-500 transition"
          value={filters.sousDivision2}
          onChange={(e) => handleSelect("sousDivision2", e.target.value)}
        >
          <option value="">-- Sous-Division 2 --</option>
          {filterSousDivision2.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <button 
        className="w-full bg-[#c0141c] text-white border-none rounded-md py-2 text-sm font-bold cursor-pointer mb-2 tracking-wide hover:bg-red-800 transition-colors"
        onClick={onFilter}
      >
        Filtrer
      </button>
      <button 
        className="w-full bg-transparent text-[#c0141c] border border-[#c0141c] rounded-md py-1.5 text-sm font-semibold cursor-pointer tracking-wide hover:bg-red-50 transition-colors"
        onClick={onReset}
      >
        réinitialiser
      </button>
    </aside>
  );
};

const ProductCard = ({ product, index }) => {
  return (
    <div
      className="group bg-white rounded-lg overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.07)] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_15px_rgba(192,20,28,0.3)] animate-[fadeUp_0.4s_ease_both]"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative bg-[#fafafa] flex justify-center items-center h-48 sm:h-40 border-b border-gray-100 p-4">
        <img src={product.image} alt={product.name} className="max-h-full max-w-[80%] object-contain group-hover:scale-105 transition-transform duration-300" />
        <span className="absolute top-2 right-2 bg-[#c0141c] text-white text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wide z-10 shadow-sm">
          {product.tag}
        </span>
      </div>
      <div className="p-4 pt-3 flex-1 flex flex-col">
        <p className="text-sm font-bold text-[#1a1a2e] mb-3 leading-tight min-h-[38px] line-clamp-2">{product.name}</p>
        
        <div className="flex justify-between text-xs text-gray-600 mb-1 border-b border-dashed border-gray-100 pb-1">
          <span className="text-gray-500 font-medium">Référence :</span>
          <span className="font-semibold text-[#1a1a2e]">{product.reference}</span>
        </div>
        <div className="flex justify-between text-xs text-gray-600 mb-1 border-b border-dashed border-gray-100 pb-1">
          <span className="text-gray-500 font-medium">Psc/carton :</span>
          <span className="font-semibold text-[#1a1a2e]">{product.pscCarton}</span>
        </div>
        <div className="flex justify-between text-xs text-gray-600 mb-4 border-b border-dashed border-gray-100 pb-1">
          <span className="text-gray-500 font-medium">SIZE :</span>
          <span className="font-semibold text-[#c0141c]">{product.size}</span>
        </div>

        <button className="mt-auto mx-1 bg-transparent text-[#E10600] border border-[#E10600] py-2 text-sm font-semibold tracking-wide cursor-pointer transition-all duration-300 hover:bg-[#E10600] hover:text-white hover:shadow-md">
          DEMANDER UN DEVIS
        </button>
      </div>
    </div>
  );
};

export default function LubrificationPage() {
  const [filters, setFilters] = useState({ division: "", sousDivision1: "", sousDivision2: "" });
  const [activeFilters, setActiveFilters] = useState({ division: "", sousDivision1: "", sousDivision2: "" });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleFilter = () => {
    setActiveFilters({ ...filters });
    setShowMobileFilters(false);
  };
  
  const handleReset = () => {
    const empty = { division: "", sousDivision1: "", sousDivision2: "" };       
    setFilters(empty);
    setActiveFilters(empty);
    setShowMobileFilters(false);
  };

  const filtered = products.filter((p) => {
    const okDivision = !activeFilters.division || p.name.includes(activeFilters.division);
    const okSousDiv1 = !activeFilters.sousDivision1 || p.name.includes(activeFilters.sousDivision1);
    const okSousDiv2 = !activeFilters.sousDivision2 || p.name.includes(activeFilters.sousDivision2);
    // Add additional category check based on tags or properties logic if needed
    return okDivision && okSousDiv1 && okSousDiv2;
  });

  return (
    <div className="font-['Source_Sans_3'] bg-white min-h-screen text-gray-900 pb-16">
      {/* Hero Banner */}
      <div className="relative h-[200px] sm:h-[250px] overflow-hidden bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44]">
        <div 
          className="absolute inset-0 opacity-90 mix-blend-overlay bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }} 
        />
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4">
          <h1 className="font-['Raleway'] text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-center leading-tight tracking-tight drop-shadow-md">
            Division Pièces de Rechange
            <br />
            <span className="text-[#C00000]">Automobile</span>
          </h1>
        </div>
      </div>

      <div className="w-full bg-[#f8f8f8] border-b border-gray-200 mb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Breadcrumb />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4">
          <button 
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="w-full bg-white border border-gray-300 text-gray-800 py-3 px-4 rounded-lg flex justify-between items-center shadow-sm font-semibold hover:bg-gray-50 transition-colors"
          >
            <span className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#c0141c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
              Filtrer les produits
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${showMobileFilters ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
            onFilter={handleFilter}
            onReset={handleReset}
            showMobileFilters={showMobileFilters}
          />

          <main className="flex-1 w-full">
            {filtered.length === 0 ? (
              <div className="bg-gray-50 rounded-xl p-10 text-center text-gray-500 border border-gray-100 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg font-medium text-gray-700">Aucun produit trouvé</p>
                <p className="text-sm mt-1 mb-4">Essayez d'ajuster vos critères de filtrage.</p>
                <button onClick={handleReset} className="text-[#c0141c] hover:underline font-semibold text-sm">Réinitialiser les filtres</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map((p, i) => (
                  <ProductCard key={`${p.id}-${i}`} product={p} index={i} />      
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&family=Source+Sans+3:wght@400;500;600&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
