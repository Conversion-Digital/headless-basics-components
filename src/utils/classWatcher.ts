type MutationCallbackType = (mutationsList: MutationRecord[]) => void;

export class ClassWatcher {
  private targetNode: Element;
  private classToWatch: string;
  private classAddedCallback: () => void;
  private classRemovedCallback: () => void;
  private observer: MutationObserver | null;
  private lastClassState: boolean;

  constructor(
    targetNode: Element,
    classToWatch: string,
    classAddedCallback: () => void,
    classRemovedCallback: () => void,
  ) {
    this.targetNode = targetNode;
    this.classToWatch = classToWatch;
    this.classAddedCallback = classAddedCallback;
    this.classRemovedCallback = classRemovedCallback;
    this.observer = null;
    this.lastClassState = targetNode.classList.contains(this.classToWatch);

    this.init();
  }

  private init(): void {
    this.observer = new MutationObserver(this.mutationCallback);
    this.observe();
  }

  private observe(): void {
    this.observer?.observe(this.targetNode, { attributes: true });
  }

  public disconnect(): void {
    this.observer?.disconnect();
  }

  private mutationCallback: MutationCallbackType = (mutationsList) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        const currentClassState = (
          mutation.target as HTMLElement
        ).classList.contains(this.classToWatch);

        if (this.lastClassState !== currentClassState) {
          this.lastClassState = currentClassState;
          if (currentClassState) {
            this.classAddedCallback();
          } else {
            this.classRemovedCallback();
          }
        }
      }
    }
  };
}
