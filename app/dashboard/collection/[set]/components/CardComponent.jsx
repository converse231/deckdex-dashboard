import { Card } from "@/components/ui/card";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Bookmark, Check, Forward, Heart, Plus } from "lucide-react";
import CardDetailsDialog from "./CardDetailsDialog";
import { useDebounce } from "use-debounce";
import { motion, AnimatePresence } from "framer-motion";

export default function CardComponent({ card }) {
  const [isOwned, setIsOwned] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLike = useCallback(() => {
    setIsLiked((prev) => !prev);
    // Here you would typically call an API to update the like status
    // For example: updateLikeStatus(card.id, !isLiked);
  }, []);

  const handleBookmark = useCallback(() => {
    setIsBookmarked((prev) => !prev);
    // Here you would typically call an API to update the bookmark status
    // For example: updateBookmarkStatus(card.id, !isBookmarked);
  }, []);

  const [debouncedHandleLike] = useDebounce(handleLike, 300);
  const [debouncedHandleBookmark] = useDebounce(handleBookmark, 300);

  return (
    <motion.div className="relative" initial="hidden" whileHover="visible">
      <Card
        className={`${
          isOwned ? "border-none" : "border"
        } w-full max-w-[250px] md:max-w-[280px] lg:max-w-[200px] xl:max-w-[300px] h-[220px] lg:h-[220px] xl:h-[250px] 2xl:h-[420px] flex justify-center items-center relative group lg:rounded-2xl rounded-xl mx-auto`}
      >
        <Image
          src={card?.images?.small}
          alt={`Card image of ${card?.name}`}
          height={400}
          width={320}
          className={`w-auto transition-all duration-150 rounded-xl ${
            isOwned
              ? "opacity-100 border-none h-full"
              : "opacity-40 border-dashed border-4 h-[80%] lg:h-[80%]"
          }`}
        />
      </Card>

      <motion.div
        className="absolute flex flex-col items-center justify-between gap-1 sm:gap-8 h-full py-4 sm:py-6 right-1 sm:right-2 top-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200"
        variants={{
          hidden: { opacity: 0, x: 20 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.2 }}
      >
        <CardDetailsDialog card={card} />
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col gap-1">
            <motion.button
              onClick={debouncedHandleLike}
              aria-label={isLiked ? "Unlike card" : "Like card"}
              className="focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ scale: isLiked ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.2 }}
              >
                <Heart
                  fill={isLiked ? "#E02424" : "none"}
                  className={`h-5 w-5 cursor-pointer ${
                    isLiked ? "text-red-600" : ""
                  }`}
                  strokeWidth={2.5}
                />
              </motion.div>
            </motion.button>

            <motion.button
              aria-label="Share card"
              className="focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Forward className="h-5 w-5" strokeWidth={2.5} />
            </motion.button>

            <motion.button
              onClick={debouncedHandleBookmark}
              aria-label={isBookmarked ? "Remove bookmark" : "Bookmark card"}
              className="focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ scale: isBookmarked ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.2 }}
              >
                <Bookmark
                  fill={isBookmarked ? "#facc15" : "none"}
                  className={`h-5 w-5 cursor-pointer ${
                    isBookmarked ? "text-yellow-300" : ""
                  }`}
                  strokeWidth={2.5}
                />
              </motion.div>
            </motion.button>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            <Button
              onClick={() => setIsOwned(!isOwned)}
              className="rounded-full text-white h-10 w-10 p-0"
              aria-label={
                isOwned ? "Remove from collection" : "Add to collection"
              }
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isOwned ? "owned" : "not-owned"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{
                    duration: 0.15,
                    rotate: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                >
                  {isOwned ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
