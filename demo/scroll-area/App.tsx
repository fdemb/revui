import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaContent,
  ScrollAreaCorner,
} from '../../src/scroll-area/index';
import styles from './App.module.css';

export default function App() {
  return (
    <div style={{ padding: '40px', "font-family": 'system-ui, sans-serif' }}>
      <h2>Vertical Scroll</h2>

      <ScrollAreaRoot class={styles.ScrollArea}>
        <ScrollAreaViewport class={styles.Viewport}>
          <ScrollAreaContent class={styles.Content}>
            <p class={styles.Paragraph}>
              Vernacular architecture is building done outside any academic tradition, and without
              professional guidance. It is not a particular architectural movement or style, but
              rather a broad category, encompassing a wide range and variety of building types, with
              differing methods of construction, from around the world, both historical and extant and
              classical and modern. Vernacular architecture constitutes 95% of the world's built
              environment, as estimated in 1995 by Amos Rapoport, as measured against the small
              percentage of new buildings every year designed by architects and built by engineers.
            </p>
            <p class={styles.Paragraph}>
              This type of architecture usually serves immediate, local needs, is constrained by the
              materials available in its particular region and reflects local traditions and cultural
              practices. The study of vernacular architecture does not examine formally schooled
              architects, but instead that of the design skills and tradition of local builders, who
              were rarely given any attribution for the work. More recently, vernacular architecture
              has been examined by designers and the building industry in an effort to be more energy
              conscious with contemporary design and construction—part of a broader interest in
              sustainable design.
            </p>
          </ScrollAreaContent>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar class={styles.Scrollbar}>
          <ScrollAreaThumb class={styles.Thumb} />
        </ScrollAreaScrollbar>
      </ScrollAreaRoot>

      <h2 style={{ "margin-top": '40px' }}>Both Axes</h2>

      <ScrollAreaRoot class={styles.ScrollAreaBoth}>
        <ScrollAreaViewport class={styles.Viewport}>
          <ScrollAreaContent class={styles.ContentBoth}>
            <ul class={styles.Grid}>
              {Array.from({ length: 100 }, (_, i) => (
                <li class={styles.Item}>
                  {i + 1}
                </li>
              ))}
            </ul>
          </ScrollAreaContent>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar class={styles.Scrollbar}>
          <ScrollAreaThumb class={styles.Thumb} />
        </ScrollAreaScrollbar>
        <ScrollAreaScrollbar class={styles.Scrollbar} orientation="horizontal">
          <ScrollAreaThumb class={styles.Thumb} />
        </ScrollAreaScrollbar>
        <ScrollAreaCorner />
      </ScrollAreaRoot>
    </div>
  );
}
