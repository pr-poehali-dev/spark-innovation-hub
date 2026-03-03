import { motion } from "framer-motion"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Приехал с проблемой — VIN почти не читался из-за ржавчины. Через 30 минут всё было чисто. ГИБДД приняли авто без вопросов!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    name: "Анна Смирнова",
    role: "Владелец Toyota Camry",
  },
  {
    text: "Долго искал где почистить VIN перед постановкой на учёт. Ребята сделали быстро и аккуратно — никаких царапин на кузове.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Максим Волков",
    role: "Владелец BMW 5 Series",
  },
  {
    text: "Купила авто из другого региона, VIN был в ужасном состоянии. Лазерная очистка решила проблему за один визит.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Елена Кузнецова",
    role: "Владелец Hyundai Solaris",
  },
  {
    text: "Сначала сомневался, но результат превзошёл ожидания. VIN выглядит как новый, ГИБДД приняли без нареканий.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Дмитрий Орлов",
    role: "Владелец Kia Sportage",
  },
  {
    text: "Записался онлайн, приехал в назначенное время. Всё чётко по регламенту — без очередей и лишних вопросов.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Ольга Петрова",
    role: "Владелец Lada Vesta",
  },
  {
    text: "Мастер объяснил весь процесс, показал результат до и после. Работа выполнена на совесть, рекомендую всем!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Алексей Фёдоров",
    role: "Владелец Mercedes C-Class",
  },
  {
    text: "Авто с пробегом, VIN сильно окислился. Лазером сделали всё аккуратно — краска рядом не пострадала.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    name: "Наталья Иванова",
    role: "Владелец Ford Focus",
  },
  {
    text: "Приехал по рекомендации коллеги. Цена адекватная, скорость отличная. Теперь тоже советую всем знакомым.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Михаил Сергеев",
    role: "Владелец Audi A4",
  },
  {
    text: "Переживал, что повредят кузов, но всё прошло идеально. Настоящие профессионалы своего дела!",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Светлана Новикова",
    role: "Владелец Volkswagen Polo",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const logos = ["Toyota", "BMW", "Mercedes", "Kia", "Hyundai", "Lada", "Audi", "Volkswagen", "Ford", "Nissan"]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <div className="border border-zinc-800 py-1.5 px-4 rounded-full text-sm text-zinc-400">Отзывы</div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-6 text-center tracking-tight">
            Что говорят клиенты
          </h2>
          <p className="text-center mt-4 text-zinc-500 text-lg text-balance">
            Более 500 автовладельцев уже поставили машину на учёт после нашей очистки.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-800/50">
          <p className="text-center text-sm text-zinc-500 mb-8">Работаем с любыми марками автомобилей</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={`${logo}-${index}`}
                  className="text-xl font-semibold text-zinc-700 whitespace-nowrap flex-shrink-0"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}