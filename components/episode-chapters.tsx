'use client'

import { ArrowRight, Check, Flower2, Mail, Play, Ribbon, RotateCcw, Sparkles, Star, Sun, Trophy } from 'lucide-react'
import { birthday, hopes, number, routes, wishes } from '@/lib/birthday-content'
import { Celebration, Typewriter } from './episode-effects'

const symbols = { flower: Flower2, sun: Sun, sparkles: Sparkles, ribbon: Ribbon }

export type EpisodeState = {
  cards: number[]
  route: number | null
  capsules: number[]
  capsule: number | null
  wishes: number[]
  wish: number | null
}

export const emptyEpisode: EpisodeState = { cards: [], route: null, capsules: [], capsule: null, wishes: [], wish: null }

type Props = {
  chapter: number
  state: EpisodeState
  update: (patch: Partial<EpisodeState>) => void
  next: () => void
  replay: () => void
  reduced: boolean
}

function Continue({ onClick, children = 'The next chapter' }: { onClick: () => void; children?: React.ReactNode }) {
  return <button className="primary-button" onClick={onClick}>{children}<ArrowRight aria-hidden="true" size={17} /></button>
}

function Heading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return <div className="chapter-heading"><span className="eyebrow">{eyebrow}</span><h1 tabIndex={-1} id="chapter-title">{title}</h1>{subtitle && <p>{subtitle}</p>}</div>
}

export function EpisodeChapter({ chapter, state, update, next, replay, reduced }: Props) {
  if (chapter === 0) return <div className="opening-layout">
    <div className="opening-copy">
      <div className="special-label"><span className="label-line" /><span>「 A BIRTHDAY SPECIAL 」</span><span className="label-line" /></div>
      <div className="episode-tag"><span /> A BIRTHDAY CELEBRATION</div>
      <h1 tabIndex={-1} id="chapter-title">Happy Birthday,<br /><em>{birthday.name}!</em><Sparkles className="title-sparkle" aria-hidden="true" /></h1>
      <p className="birthday-line">Today is all about you, <strong>{birthday.name}</strong> <Sparkles aria-hidden="true" size={19} /></p>
      <p className="opening-description">A little celebration, made just for today.</p>
      <button className="primary-button start-button" onClick={next}><Play size={16} fill="currentColor" aria-hidden="true" />Start<ArrowRight size={17} aria-hidden="true" /></button>
      <span className="start-footnote">Made for you. Enjoy!</span>
    </div>
    <div className="episode-ticket" aria-label="A birthday ticket for Niharika">
      <div className="ticket-top"><Flower2 size={19} aria-hidden="true" /><span>HAPPY BIRTHDAY</span><span>FOR YOU</span></div>
      <div className="ticket-number">20<Star className="ticket-star" aria-hidden="true" /></div>
      <div className="ticket-title">Niharika</div><div className="ticket-subtitle">Today is yours.</div>
      <div className="ticket-bottom"><span>BIRTHDAY</span><Star size={15} aria-hidden="true" /><span>MAKE A WISH</span></div>
    </div>
    <div className="scene-caption"><span className="caption-line" /><span>A NEW CHAPTER BEGINS</span><span className="caption-dot">·</span><span>Niharika turns 20.</span></div>
  </div>

  if (chapter === 1) return <div className="chapter-content welcome-content">
    <Heading eyebrow="HAPPY BIRTHDAY" title="Happy Birthday, Niharika!" />
    <p className="handwritten welcome-subtitle">Today is all about you.</p>
    <p className="scene-description"><Typewriter text="A little celebration, made just for today." reduced={reduced} /></p>
    <Continue onClick={next}>Birthday wishes</Continue>
    <p className="small-note">{birthday.birthdayNote}</p>
    <Celebration />
  </div>

  if (chapter === 2) return <div className="chapter-content">
    <Heading eyebrow="BEST WISHES" title="Good things for the year ahead" subtitle="Pick a card for a birthday wish." />
    <div className="hope-grid">{hopes.map((hope, index) => {
      const Icon = symbols[hope.symbol as keyof typeof symbols]
      const open = state.cards.includes(index)
      return <button key={hope.title} className={`hope-card ${open ? 'is-flipped' : ''}`} aria-expanded={open} aria-label={`${hope.title}${open ? ': ' + hope.text : ' — reveal card'}`} onClick={() => update({ cards: open ? state.cards.filter(value => value !== index) : [...state.cards, index] })}>
        <span className="hope-card-inner"><span className="hope-front" aria-hidden={open}><span className="card-number">0{index + 1}</span><Icon className="hope-icon" aria-hidden="true" /><strong>{hope.title}</strong><span className="card-hint">A LITTLE WISH FOR YOU <span>↗</span></span></span><span className="hope-back" aria-hidden={!open}><Sparkles aria-hidden="true" /><strong>{hope.title}</strong><span>{hope.text}</span><span className="card-hint">TAP TO TURN BACK</span></span></span>
      </button>
    })}</div>
    <p className="small-note" aria-live="polite">{state.cards.length ? `${state.cards.length} ${state.cards.length === 1 ? 'wish' : 'wishes'} picked.` : 'Pick a card to see a birthday wish.'}</p>
    <Continue onClick={next} />
  </div>

  if (chapter === 3) return <div className="chapter-content destiny-content">
    <Heading eyebrow="PICK YOUR FAVORITE" title="Which style do you like best?" subtitle="Choose the one that suits your taste." />
    <div className="route-grid">{routes.map((route, index) => {
      const Icon = symbols[route.symbol as keyof typeof symbols]
      return <button className={`route-card ${state.route === index ? 'selected' : ''}`} key={route.title} aria-pressed={state.route === index} onClick={() => update({ route: index })}><Icon aria-hidden="true" /><span>{route.title}</span>{state.route === index ? <Check aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}</button>
    })}</div>
    <div className="route-result" aria-live="polite">{state.route !== null ? <div key={state.route} className="reveal-message"><span className="eyebrow">YOUR PICK</span><h2>{routes[state.route].text}</h2><p>{routes[state.route].detail}</p></div> : <p className="small-note">Pick the style you like best.</p>}</div>
    <Continue onClick={next} />
  </div>

  if (chapter === 4) return <div className="chapter-content story-content">
    <Heading eyebrow="A FEW HIGHLIGHTS" title="Things to celebrate" subtitle="A few good things for your birthday." />
    {birthday.memories.length > 0 ? (
      <ol className="timeline">{birthday.memories.map((memory, index) => <li key={memory.title}><span className="timeline-node">{number(index + 1)}</span><div><span className="eyebrow">EPISODE {number(index + 1)}</span><h2>{memory.title}</h2><p>{memory.message}</p>{memory.photo && <img className="memory-photo" src={memory.photo} alt={`Memory: ${memory.title}`} loading="lazy" onError={event => { event.currentTarget.hidden = true }} />}</div></li>)}</ol>
    ) : (
      <div className="reveal-message quiet-card">
        <p>Happy Birthday, Niharika!</p>
        <p>Wishing you a beautiful year ahead.</p>
      </div>
    )}
    <div className="continued-note"><span className="handwritten">Here’s to you.</span><p>You deserve all the happiness in the world.</p></div><Continue onClick={next} />
  </div>

  if (chapter === 5) return <div className="chapter-content capsule-content">
    <Heading eyebrow="BIRTHDAY NOTES" title="A few kind words" subtitle="Choose a note to read. ✨" />
    <div className="capsule-grid">{birthday.capsules.map((message, index) => <button key={index} className={`capsule-button ${state.capsules.includes(index) ? 'opened' : ''}`} aria-label={`Open capsule ${number(index + 1)}${state.capsules.includes(index) ? ', previously opened' : ''}`} aria-pressed={state.capsule === index} onClick={() => update({ capsule: index, capsules: [...new Set([...state.capsules, index])] })}><span className="capsule-globe"><Star aria-hidden="true" /><span className="capsule-glint" /><span className="capsule-seam" /></span><span>CAPSULE {number(index + 1)}</span><span className="capsule-status">{state.capsules.includes(index) ? 'A note for you' : 'Open this note'}</span></button>)}</div>
    <div className="capsule-result" aria-live="polite">{state.capsule !== null ? <p className="reveal-message" key={state.capsule}>{birthday.capsules[state.capsule]}</p> : <p className="small-note">Pick one of the birthday notes.</p>}</div><Continue onClick={next} />
  </div>

  if (chapter === 6) return <div className="chapter-content wishes-content">
    <Heading eyebrow="MAKE A WISH" title="A sky of wishes" subtitle="Choose a star to read a wish." />
    <div className="wish-layout"><div className="wish-grid">{wishes.map((wish, index) => <button key={index} className={`wish-star ${state.wishes.includes(index) ? 'unlocked' : ''} ${state.wish === index ? 'active-wish' : ''}`} aria-label={`Wish ${index + 1}${state.wishes.includes(index) ? ', unlocked' : ', open'}`} aria-pressed={state.wish === index} onClick={() => update({ wish: index, wishes: [...new Set([...state.wishes, index])] })}><Star aria-hidden="true" /><span>{number(index + 1)}</span>{state.wishes.includes(index) && <Check className="wish-check" aria-hidden="true" />}</button>)}</div>
    <div className="wish-message" aria-live="polite">{state.wish !== null ? <div key={state.wish} className="reveal-message"><Sparkles aria-hidden="true" /><span className="eyebrow">WISH {number(state.wish + 1)} OF {wishes.length}</span><p>{wishes[state.wish]}</p><span className="handwritten">a little wish, just for you.</span></div> : <div><Star aria-hidden="true" /><p>Your first wish is waiting.</p><span>Go on, pick a star.</span></div>}</div></div>
    <div className="wish-progress"><span aria-live="polite">{state.wishes.length}/{wishes.length} wishes read</span><progress value={state.wishes.length} max={wishes.length} aria-label="Birthday wishes read" /></div>
    {state.wishes.length === wishes.length && <><div className="achievement" role="status"><Trophy aria-hidden="true" /><div><strong>All {wishes.length} wishes read</strong><span>Hope you enjoyed them!</span></div></div><Celebration /></>}
    <Continue onClick={next}>A few words</Continue>
  </div>

  if (chapter === 7) return <div className="chapter-content letter-content">
    <Heading eyebrow="HAPPY BIRTHDAY" title="A few words" subtitle="Short, and meant for today." />
    <article className="letter"><div className="letter-top"><span className="eyebrow">HAPPY BIRTHDAY</span><Mail aria-hidden="true" /></div><h2 className="handwritten">For {birthday.name}</h2>{birthday.letter.map((paragraph, index) => <p key={index}>{paragraph}</p>)}<div className="letter-signature"><span className="handwritten">Cheers to 20</span><button className="letter-seal" aria-label="A little flower"><Flower2 aria-hidden="true" /></button></div></article><Continue onClick={next}>Finish</Continue>
  </div>

  return <div className="chapter-content ending-content"><Heading eyebrow="HAPPY BIRTHDAY" title={`Happy Birthday, ${birthday.name}!`} /><p className="handwritten ending-subtitle">Here’s to your next beautiful chapter.</p><div className="ending-birthday">You deserve all the happiness in the world.</div><p className="scene-description">Make a wish.</p><div className="ending-actions"><button className="primary-button" onClick={replay}><RotateCcw size={17} aria-hidden="true" />See it again</button><a href="/" className="primary-button secondary-button"><Sparkles size={16} aria-hidden="true" />Candle surprise</a></div><p className="small-note">A little celebration, made just for today.</p><Celebration /></div>
}
