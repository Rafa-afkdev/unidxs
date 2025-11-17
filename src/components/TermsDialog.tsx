"use client"

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"

interface TermsDialogProps {
  children: React.ReactNode
}

export default function TermsDialog({ children }: TermsDialogProps) {
  const t = useTranslations('terms')

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh]">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <Image src="/Logo.png" alt="UNIDXS Logo" width={128} height={128} />
            <DialogTitle className="text-2xl font-bold">{t('title')}</DialogTitle>
          </div>
          <DialogDescription className="text-sm text-muted-foreground">
            {t('lastUpdated')}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            <p className="text-sm leading-relaxed">
              {t('intro')}
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  {t('sections.services.title')}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t('sections.services.content')}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  {t('sections.conduct.title')}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t('sections.conduct.content')}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  {t('sections.liability.title')}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t('sections.liability.content')}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  {t('sections.modifications.title')}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t('sections.modifications.content')}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  {t('sections.contact.title')}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t('sections.contact.content')}
                </p>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
