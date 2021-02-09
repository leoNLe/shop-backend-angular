import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  styleUrls: ['./image-gallery.component.css'],
  templateUrl: './image-gallery.component.html'
})
export class ImageGalleryComponent implements OnInit {
  @Input() public images: {}[];
  @ViewChildren('gallery') private galleryImage: QueryList<ElementRef>;
  @ViewChildren('thumbnails') private thumbnailsArr: QueryList<ElementRef>;
  constructor(private renderer: Renderer2) {}

  public ngOnInit(): void {}

  public changeActive(event, i): void {
    const arr = this.galleryImage.toArray();
    arr.forEach((el) => {
      if (el.nativeElement.classList.contains('active')) {
        this.toggleShowImage(el);
      }
    });
    this.toggleShowImage(arr[i]);
  }

  private toggleShowImage(el: ElementRef): void {
    const addName = el.nativeElement.classList.contains('active')
      ? 'hidden'
      : 'active';
    const removeName = addName === 'hidden' ? 'active' : 'hidden';
    this.renderer.addClass(el.nativeElement, addName);
    this.renderer.removeClass(el.nativeElement, removeName);
  }
}
